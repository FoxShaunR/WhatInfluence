'use strict';
module.exports = (sequelize, DataTypes) => {
  const news_sources = sequelize.define('news_sources', {
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    timestamps: true,
  });
  news_sources.associate = function(models) {
    // associations can be defined here
  };
  return news_sources;
};