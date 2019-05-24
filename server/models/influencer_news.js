'use strict';
module.exports = (sequelize, DataTypes) => {
  const influencer_news = sequelize.define('influencer_news', {
    influencer_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'influencers',
        key: 'id'
      }
    },
    news_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'news',
        key: 'id'
      }
    },
  }, {
    timestamps: true,
  });
  // news.associate = function(models) {
  //   // associations can be defined here
  // };
  return influencer_news;
};