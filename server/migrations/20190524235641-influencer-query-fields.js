'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('influencers', 'image_attribution', {
          type: Sequelize.TEXT,
        }, { transaction: t }),
        queryInterface.addColumn('influencers', 'query_terms', {
          type: Sequelize.ARRAY(Sequelize.TEXT),
        }, { transaction: t }),
        queryInterface.sequelize.query(`
          ALTER TABLE influencers ADD COLUMN query TSQUERY
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          CREATE OR REPLACE FUNCTION influencer_calced_trg()
          RETURNS trigger
          LANGUAGE plpgsql
          SECURITY DEFINER
          AS $BODY$
          DECLARE
            query_items TEXT[] := '{}';
          BEGIN
            NEW.full_name = CONCAT(NEW.first_name, ' ', NEW.last_name);
            IF NEW.full_name IS NOT NULL THEN
              query_items := array_append(query_items, NEW.full_name);
            END IF;
            IF NEW.facebook_display IS NOT NULL THEN
              query_items := array_append(query_items, NEW.facebook_display);
            END IF;
            IF NEW.instagram_display IS NOT NULL THEN
              query_items := array_append(query_items, NEW.instagram_display);
            END IF;
            IF NEW.youtube_display IS NOT NULL THEN
              query_items := array_append(query_items, NEW.youtube_display);
            END IF;
            IF NEW.twitch_display IS NOT NULL THEN
              query_items := array_append(query_items, NEW.twitch_display);
            END IF;
            IF NEW.query_terms IS NOT NULL THEN
              query_items := array_append(query_items, array_to_string(NEW.query_terms, ' | '));
            END IF;
            NEW.query = to_tsquery(array_to_string(query_items, ' | '));
            
            RETURN NEW;
          END
          $BODY$;
        `, { transaction: t }),
        queryInterface.sequelize.query(`
          CREATE TRIGGER calc_influencer_fields
          BEFORE INSERT OR UPDATE
          ON influencers
          FOR EACH ROW
          EXECUTE PROCEDURE influencer_calced_trg()
        `, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.sequelize.query(`
            DROP TRIGGER calc_influencer_fields ON influencers
          `, { transaction: t }),
        queryInterface.sequelize.query(`
            DROP FUNCTION influencer_calced_trg()
          `, { transaction: t }),
        queryInterface.removeColumn('influencers', 'query', { transaction: t }),
        queryInterface.removeColumn('influencers', 'query_terms', { transaction: t }),
        queryInterface.removeColumn('influencers', 'image_attribution', { transaction: t }),
      ]);
    });
  }
};
