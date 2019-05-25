'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('influencers', 'twitter_uri', {
          type: Sequelize.TEXT
        }, { transaction: t }),
        queryInterface.addColumn('influencers', 'twitter_display', {
          type: Sequelize.JSON
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('influencers', 'twitter_uri', { transaction: t }),
        queryInterface.removeColumn('influencers', 'twitter_display', { transaction: t }),
      ]);
    });
  }
};
