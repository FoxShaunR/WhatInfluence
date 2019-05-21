'use strict';
module.exports = (sequelize, DataTypes) => {
  const news = sequelize.define('news', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING,
    author: DataTypes.STRING,
    source_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'news_sources',
        // This is the column name of the referenced model
        key: 'id',
      }
    },
  }, {
    timestamps: true,
  });
  news.associate = function(models) {
    // associations can be defined here
  };
  return news;
};