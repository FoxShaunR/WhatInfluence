'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('news', 'source_id', {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        model: 'news_sources',
        // This is the column name of the referenced model
        key: 'id',
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('news', 'source_id');
  }
};
