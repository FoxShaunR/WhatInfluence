'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.sequelize.query(`
          CREATE OR REPLACE FUNCTION after_influencer_insert_trg()
          RETURNS trigger
          LANGUAGE plpgsql
          SECURITY DEFINER
          AS $BODY$
          BEGIN
            INSERT INTO public.influencer_news(
              influencer_id, news_id, "createdAt", "updatedAt")
            SELECT influencers.id, news.id, now(), now()
            FROM influencers JOIN news ON news.vector @@ influencers.query
            WHERE influencers.id = NEW.id
            ON CONFLICT DO NOTHING;
            
            RETURN NEW;
          END
          $BODY$;
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          CREATE TRIGGER after_influencer_insert
          AFTER INSERT
          ON influencers
          FOR EACH ROW
          EXECUTE PROCEDURE after_influencer_insert_trg()
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          CREATE OR REPLACE FUNCTION after_news_insert_trg()
          RETURNS trigger
          LANGUAGE plpgsql
          SECURITY DEFINER
          AS $BODY$
          BEGIN
            INSERT INTO public.influencer_news(
              influencer_id, news_id, "createdAt", "updatedAt")
            SELECT influencers.id, news.id, now(), now()
            FROM influencers JOIN news ON news.vector @@ influencers.query
            WHERE news.id = NEW.id
            ON CONFLICT DO NOTHING;
            
            RETURN NEW;
          END
          $BODY$;
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          CREATE TRIGGER after_news_insert
          AFTER INSERT
          ON news
          FOR EACH ROW
          EXECUTE PROCEDURE after_news_insert_trg()
        `, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.sequelize.query(`
          DROP TRIGGER after_news_insert ON news
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          DROP FUNCTION after_news_insert_trg()
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          DROP TRIGGER after_influencer_insert ON news
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          DROP FUNCTION after_influencer_insert_trg()
        `, { transaction: t }),
      ]);
    });
  }
};
