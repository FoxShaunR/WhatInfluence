'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.sequelize.query(`
          ALTER TABLE influencer_news
            DROP CONSTRAINT influencer_news_influencer_id_fkey
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          ALTER TABLE influencer_news
            ADD CONSTRAINT influencer_news_influencer_id_fkey
            FOREIGN KEY (influencer_id)
            REFERENCES influencers(id)
            ON DELETE CASCADE
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          ALTER TABLE influencer_news
            DROP CONSTRAINT influencer_news_news_id_fkey
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          ALTER TABLE influencer_news
            ADD CONSTRAINT influencer_news_news_id_fkey
            FOREIGN KEY (news_id)
            REFERENCES news(id)
            ON DELETE CASCADE
        `, { transaction: t })
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.sequelize.query(`
          ALTER TABLE influencer_news
            DROP CONSTRAINT influencer_news_influencer_id_fkey
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          ALTER TABLE influencer_news
            ADD CONSTRAINT influencer_news_influencer_id_fkey
            FOREIGN KEY (influencer_id)
            REFERENCES influencers(id)
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          ALTER TABLE influencer_news
            DROP CONSTRAINT influencer_news_news_id_fkey
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          ALTER TABLE influencer_news
            ADD CONSTRAINT influencer_news_news_id_fkey
            FOREIGN KEY (news_id)
            REFERENCES news(id)
        `, { transaction: t })
      ]);
    });
  }
};
