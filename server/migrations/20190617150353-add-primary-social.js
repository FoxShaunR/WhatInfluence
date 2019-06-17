'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('influencers', 'primary_uri', {
          type: Sequelize.TEXT,
        }, { transaction: t }),
        queryInterface.addColumn('influencers', 'primary_display', {
          type: Sequelize.TEXT,
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('influencers', 'primary_uri', { transaction: t }),
        queryInterface.removeColumn('influencers', 'primary_display', { transaction: t }),
      ]);
    });
  }
};
