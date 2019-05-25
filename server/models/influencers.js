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
    image_attribution: {
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
    },
    twitter_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitter_display: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    query_terms: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    }
  }, {
    timestamps: true,
  });
  influencers.associate = function associate(models) {
    influencers.belongsToMany(models.news, {
      through: models.influencer_news,
      foreignKey: 'influencer_id',
      otherKey: 'news_id'
    });
  };
  return influencers;
};