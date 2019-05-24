'use strict';
module.exports = (sequelize, DataTypes) => {
  const influencers = sequelize.define('influencers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    full_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    facebook_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    facebook_display: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    instagram_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    instagram_display: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    youtube_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    youtube_display: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    web_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    web_display: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitch_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitch_display: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    wikipedia_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    wikipedia_display: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {
    timestamps: true,
  });
  // influencers.associate = function(models) {
  //   // associations can be defined here
  // };
  return influencers;
};