'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('influencers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      last_name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      full_name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      image_uri: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      facebook_uri: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      facebook_display: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      instagram_uri: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      instagram_display: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      youtube_uri: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      youtube_display: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      web_uri: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      web_display: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      twitch_uri: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      twitch_display: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      wikipedia_uri: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      wikipedia_display: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('influencers');
  }
};
