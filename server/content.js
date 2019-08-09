const express = require('express');

const contentApp = express();

contentApp.get('/latest-news', async (req, res) => {
  const { news } = require('./sequelize').getSequelize();
  const { rowCount, rows } = await news.getLatestInfluencerNews();
  res.status(200).json({
    rowCount,
    data: rows.map(r => r.get({ plain: true })),
  });
});

contentApp.get('/influencer/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send();
    return;
  }
  const { influencers } = require('./sequelize').getSequelize();
  res.status(200).json(await influencers.findByPk(id));
});

// contentApp.get('/influencer/:id/news', async (req, res) => {
//   const { news } = require('./sequelize').getSequelize();
//   const { rowCount, rows } = await news.getLatestInfluencerNews();
//   res.status(200).json({
//     rowCount,
//     data: rows.map(r => r.get({ plain: true })),
//   });
// });


exports.contentApp = contentApp;
