require('dotenv').config();

const { scheduleFeeds } = require('./feedparser');
const winston = require('winston');
const { combine, timestamp, printf } = winston.format;

const WATCHED_FEEDS = ['http://kotaku.com/vip.xml', 'http://jezebel.com/vip.xml'];

/**
 * Winston config
 */

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

winston.configure({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.File({ filename: 'feedserver.log' }),
    new winston.transports.Console(),
  ]
});

//  Begin watching and retrieving news feeds
scheduleFeeds(WATCHED_FEEDS);