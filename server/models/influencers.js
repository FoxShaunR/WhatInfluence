'use strict';
const { Op } = require('sequelize');

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
    primary_uri: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    primary_display: {
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

  influencers.search = (keyword) => {
    const kw = `%${keyword}%`;
    return (influencers
    .findAndCountAll({
      where: {
        [Op.or]: [
          {
            full_name: {
              [Op.iLike]: kw,
            },
          },
          {
            facebook_display: {
              [Op.iLike]: kw,
            },
          },
          {
            instagram_display: {
              [Op.iLike]: kw,
            },
          },
          {
            youtube_display: {
              [Op.iLike]: kw,
            },
          },
          {
            web_display: {
              [Op.iLike]: kw,
            },
          },
          {
            twitch_display: {
              [Op.iLike]: kw,
            },
          },
          {
            wikipedia_display: {
              [Op.iLike]: kw,
            },
          },
          {
            twitter_display: {
              [Op.iLike]: kw,
            },
          },
        ],
      },
    }));
  }
  return influencers;
};