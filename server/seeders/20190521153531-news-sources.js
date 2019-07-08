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
      {
        name: 'The Verge',
        url: 'https://www.theverge.com/creators/rss/index.xml',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        name: 'CNET News',
        url: 'https://www.cnet.com/rss/news/',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        name: 'CNET Gaming',
        url: 'https://www.cnet.com/rss/gaming/',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('news_sources', null, {});
  }
};
