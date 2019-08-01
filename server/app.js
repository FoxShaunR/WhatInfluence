require('dotenv').config();
const { scheduleFeeds } = require('./feedparser');
const winston = require('winston');
const express = require('express');
const { contentApp } = require('./content');
const cors = require('cors')({
  origin: true,
  allowedHeaders: 'Content-Range,Content-Type,Authorization',
  exposedHeaders: 'Content-Range',
});

const app = express();

app.use(cors);

const { EXPRESS_PORT = 3000 } = process.env;

/**
 * Winston config
 */
const { combine, timestamp, printf } = winston.format;

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
scheduleFeeds();

/**
 *  Express config
 */

app.use('/content', contentApp);
app.listen(EXPRESS_PORT, () => winston.log('debug', `Example app listening on port ${EXPRESS_PORT}!`));
