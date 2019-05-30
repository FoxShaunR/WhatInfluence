'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('news', 'sentiment', {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('news', 'sentiment', { transaction: t }),
      ]);
    });
  }
};
