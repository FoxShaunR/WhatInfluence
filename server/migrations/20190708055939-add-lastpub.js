'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('news_sources', 'last_pub', {
          type: Sequelize.DATE,
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('news_sources', 'last_pub', { transaction: t })
      ]);
    });
  }
};
