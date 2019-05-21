'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
        return Promise.all([
            queryInterface.changeColumn('news', 'title', {
                type: Sequelize.TEXT
            }, { transaction: t }),
            queryInterface.changeColumn('news', 'description', {
              type: Sequelize.TEXT
            }, { transaction: t }),
            queryInterface.changeColumn('news', 'link', {
              type: Sequelize.TEXT
            }, { transaction: t }),
            queryInterface.changeColumn('news', 'author', {
              type: Sequelize.TEXT
            }, { transaction: t }),
        ])
    })
},

down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
        return Promise.all([
          queryInterface.changeColumn('news', 'title', {
              type: Sequelize.STRING
          }, { transaction: t }),
          queryInterface.changeColumn('news', 'description', {
            type: Sequelize.STRING
          }, { transaction: t }),
          queryInterface.changeColumn('news', 'link', {
            type: Sequelize.STRING
          }, { transaction: t }),
          queryInterface.changeColumn('news', 'author', {
            type: Sequelize.STRING
          }, { transaction: t }),
        ])
    })
}
};
