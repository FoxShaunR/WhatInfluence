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
  // influencer_news.associate = function(models) {
  //   influencer_news.belongsTo(models.news, {
  //     foreignKey: 'news_id',
  //   });

  //   influencer_news.belongsTo(models.influencers, {
  //     foreignKey: 'influencer_id',
  //   });
  // };
  return influencer_news;
};