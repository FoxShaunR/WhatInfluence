'use strict';
const { Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const news = sequelize.define('news', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    link: DataTypes.TEXT,
    author: DataTypes.TEXT,
    pubdate: DataTypes.DATE,
    source_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'news_sources',
        // This is the column name of the referenced model
        key: 'id',
      }
    },
    summary: DataTypes.TEXT,
    post: DataTypes.JSON,
    sentiment: DataTypes.INTEGER
  }, {
    timestamps: true,
  });
  news.associate = function(models) {
    news.belongsTo(models.news_sources, {
      foreignKey: 'source_id',
    });

    news.belongsToMany(models.influencers, {
      through: 'influencer_news',
      foreignKey: 'news_id',
      otherKey: 'influencer_id',
    });

    news.addScope('withInfluencerName', {
      include: [{
        model: models.influencers,
        attributes: ['id', 'full_name', 'primary_display', 'primary_uri'],
        required: true,
      }],
    });

    news.addScope('withSourceName', {
      include: [{
        model: models.news_sources,
        attributes: ['id', 'name'],
        required: true,
      }],
    });

    news.getLatestInfluencerNews = () => news
      .scope(
        'withInfluencerName',
        'withSourceName',
      ).findAndCountAll({
        order: sequelize.col('createdAt', 'DESC'),
      });
  };
  return news;
};