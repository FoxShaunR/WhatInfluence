'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.sequelize.query(`
          ALTER TABLE news ADD COLUMN vector TSVECTOR
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          CREATE OR REPLACE FUNCTION news_vector_trg()
          RETURNS trigger
          LANGUAGE plpgsql
          SECURITY DEFINER
          AS $BODY$
          BEGIN
            NEW.vector = to_tsvector(CONCAT(NEW.title, NEW.description));
        
            RETURN NEW;
          END
          $BODY$;
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          CREATE TRIGGER calc_news_vector
          BEFORE INSERT OR UPDATE
          ON news
          FOR EACH ROW
          EXECUTE PROCEDURE news_vector_trg()
        `, { transaction: t }),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
        return Promise.all([
          queryInterface.sequelize.query(`
            DROP TRIGGER calc_news_vector ON news
          `, { transaction: t }),
          queryInterface.sequelize.query(`
            DROP FUNCTION news_vector_trg()
          `, { transaction: t }),
          queryInterface.sequelize.query(`
            ALTER TABLE news DROP COLUMN vector TSVECTOR
          `, { transaction: t }),
        ])
      })
    }
};
