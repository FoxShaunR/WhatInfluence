const { scheduleFeeds } = require('./feedparser');

const WATCHED_FEEDS = ['http://kotaku.com/vip.xml', 'http://jezebel.com/vip.xml'];

scheduleFeeds(WATCHED_FEEDS);