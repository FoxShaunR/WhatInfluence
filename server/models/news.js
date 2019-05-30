'use strict';
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
  // news.associate = function(models) {
  //   // associations can be defined here
  // };
  return news;
};