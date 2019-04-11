const express = require('express');
const FeedParser = require('feedparser');
const request = require('request'); // for fetching the feed
const cron = require('node-cron');

const app = express();
const port = 3000;

const feedparser = new FeedParser([]);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

cron.schedule('* * * * *', () => {
  const req = request('http://kotaku.com/vip.xml')
  console.log('running a task every minute');

  req.on('error', function (error) {
    // handle any request errors
  });
  
  req.on('response', function (res) {
    const stream = this; // `this` is `req`, which is a stream
  
    if (res.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    }
    else {
      stream.pipe(feedparser);
    }
  });
});

feedparser.on('error', function (error) {
  // always handle errors
});

feedparser.on('readable', function () {
  // This is where the action is!
  const stream = this; // `this` is `feedparser`, which is a stream
  const meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  let item;

  while (item = stream.read()) {
    console.log(item.title);
  }
});