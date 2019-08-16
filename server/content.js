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

const QUERY_TRENDING_INFLUENCERS = `
  SELECT  influencers.id
  ,full_name
  ,primary_uri
  ,primary_display
  FROM influencers
      JOIN influencer_news ON influencer_news.influencer_id = influencers.id
      JOIN news ON news.id = influencer_news.news_id
  WHERE news.pubdate >= now() - interval '30 day'
  GROUP BY influencers.id, influencers.full_name, influencers.primary_uri, influencers.primary_display
  ORDER BY COUNT(news.id) DESC;
`

contentApp.get('/trending-influencers', async (req, res) => {
  const sequelize = require('./sequelize').getSequelize();
  const [data, meta] = await sequelize.query(QUERY_TRENDING_INFLUENCERS);
  const { rowCount } = meta;
  res.status(200).json({ rowCount, data });
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

contentApp.get('/influencer/:id/news', async (req, res) => {
  const { news } = require('./sequelize').getSequelize();
  const { id } = req.params;
  const { rowCount, rows } = await news.getNewsByInfluencerId(id);
  res.status(200).json({
    rowCount,
    data: rows.map(r => r.get({ plain: true })),
  });
});

contentApp.get('/findInfluencersByKeyword', async (req, res) => {
  const { influencers } = require('./sequelize').getSequelize();
  const { keyword } = req.query;
  const { rowCount, rows } = await influencers.search(keyword);
  res.status(200).json({
    rowCount,
    data: rows.map(r => r.get({ plain: true })),
  });
});


exports.contentApp = contentApp;
