'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('news_sources', [
      {
        name: 'Kotaku',
        url: 'http://kotaku.com/vip.xml',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        name: 'Jezebel',
        url: 'http://jezebel.com/vip.xml',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('news_sources', null, {});
  }
};
