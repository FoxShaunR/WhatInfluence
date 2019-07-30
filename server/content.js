const express = require('express');
const {
  getLatestNews,
} = require('./adminDB');

const contentApp = express();

contentApp.get('/latest-news', async (req, res) => {
  res.status(200).json(await getLatestNews());
});

exports.contentApp = contentApp;
