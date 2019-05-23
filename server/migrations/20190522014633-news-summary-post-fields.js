'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('news', 'summary', {
          type: Sequelize.TEXT
        }, { transaction: t }),
        queryInterface.addColumn('news', 'post', {
          type: Sequelize.JSON
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('news', 'summary', { transaction: t }),
        queryInterface.removeColumn('news', 'post', { transaction: t }),
      ]);
    });
  }
};
