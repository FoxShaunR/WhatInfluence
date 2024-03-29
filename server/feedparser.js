const FeedParser = require('feedparser');
const request = require('request'); // for fetching the feed
const cron = require('node-cron');
const winston = require('winston');
const zlib = require('zlib');
const Iconv = require('iconv').Iconv;
const { getSentiment } = require('./sentiment');

const {
  addNews,
  getNewsSources,
  updateNewsSource,
} = require('./adminDB');

const { FEEDFETCH_FREQ_MINUTES: FREQUENCY } = process.env; // Fetch feed every FREQUENCY minutes

// Based on https://github.com/danmactough/node-feedparser/blob/master/examples/compressed.js
function fetchFeed(feed) {
  // Keep track of the starting date for this fetch iteration
  const startDate = new Date(feed.last_pub);

  // Define our streams
  const req = request(feed.url, {timeout: 10000, pool: false});
  req.setMaxListeners(50);
  // Some feeds do not respond without user-agent and accept headers.
  req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
  req.setHeader('accept', 'text/html,application/xhtml+xml');

  const feedparser = new FeedParser();

  winston.info(`Logging posts after ${startDate}`);

  // Define our handlers
  req.on('error', done);
  req.on('response', function(res) {
    if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
    var encoding = res.headers['content-encoding'] || 'identity'
      , charset = getParams(res.headers['content-type'] || '').charset;
    res = maybeDecompress(res, encoding);
    res = maybeTranslate(res, charset);
    res.pipe(feedparser);
  });

  feedparser.on('error', done);
  feedparser.on('end', done);
  feedparser.on('readable', async function() {
    let post;
    while ((post = this.read())) {
      // Only record new items
      if (startDate < new Date(post.pubDate)) {
        const {
          author,
          description,
          summary,
          link,
          title,
        } = post;
        const pubDate = new Date(post.pubDate);
        if (new Date(feed.last_pub) < pubDate) {
          feed.last_pub = pubDate;
          updateNewsSource(feed.source_id, { last_pub: pubDate });
        }
        const cleanDesc = description.replace(/<.*?>/g, '');
        const sentiment = getSentiment(`${title}. ${cleanDesc}`);
        addNews({
          author,
          description: cleanDesc,
          summary,
          link,
          pubdate: pubDate,
          source_id: feed.source_id,
          title,
          post,
          sentiment,
        });
        winston.debug(`${pubDate}: ${title}`);
      }
    }
  });
}

function maybeDecompress (res, encoding) {
  let decompress;
  if (encoding.match(/\bdeflate\b/)) {
    decompress = zlib.createInflate();
  } else if (encoding.match(/\bgzip\b/)) {
    decompress = zlib.createGunzip();
  }
  return decompress ? res.pipe(decompress) : res;
}

function maybeTranslate (res, charset) {
  let iconv;
  // Use iconv if its not utf8 already.
  if (!iconv && charset && !/utf-*8/i.test(charset)) {
    try {
      iconv = new Iconv(charset, 'utf-8');
      winston.debug('Converting from charset %s to utf-8');
      iconv.on('error', done);
      // If we're using iconv, stream will be the output of iconv
      // otherwise it will remain the output of request
      res = res.pipe(iconv);
    } catch(err) {
      res.emit('error', err);
    }
  }
  return res;
}

function getParams(str) {
  const params = str.split(';').reduce(function (params, param) {
    const parts = param.split('=').map(function (part) { return part.trim(); });
    if (parts.length === 2) {
      params[parts[0]] = parts[1];
    }
    return params;
  }, {});
  return params;
}

function done(err) {
  if (err) {
    winston.error(err);
  }
}

const scheduleFeeds = async () => {
  const { data: feeds } = await getNewsSources();
  // Initialize lastPub to 2 days ago
  const feedObjs = feeds.map(feed => ({
    source_id: feed.id,
    name: feed.name,
    url: feed.url,
    last_pub: feed.last_pub || new Date(Date.now() - (1000 * 60 * 60 * 24 * 2)),
  }));
  winston.info(`Scheduling feeds every ${FREQUENCY || 60} minutes`);
  // http://openjs.com/scripts/jslibrary/demos/crontab.php
  cron.schedule(`*/${FREQUENCY} * * * *`, () => {
    Promise.all(feedObjs.map(async feed => {
      winston.debug(`Fetching ${feed.name}`);
      fetchFeed(feed);
    }));
  });
};


exports.scheduleFeeds = scheduleFeeds;