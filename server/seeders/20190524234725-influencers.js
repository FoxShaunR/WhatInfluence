'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('influencers', [
      {
        first_name: 'Felix',
        last_name: 'Kjellberg',
        image_uri: 'https://commons.wikimedia.org/wiki/File:PewDiePie_at_PAX_2015_crop.jpg',
        image_attribution: 'Original author: camknows from Seattle, WA, USACropped by WikiKiwi [CC0]',
        facebook_display: 'PewDiePie',
        facebook_uri: 'https://www.facebook.com/PewDiePie',
        instagram_uri: 'https://www.instagram.com/pewdiepie/',
        instagram_display: 'PewDiePie',
        youtube_display: 'PewDiePie',
        youtube_uri: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw',
        web_uri: 'https://shoppewdiepie.com/',
        web_display: 'shoppewdiepie.com',
        twitch_uri: 'https://www.twitch.tv/pewdiepie',
        twitch_display: 'PewDiePie',
        twitter_display: 'PewDiePie',
        twitter_uri: 'https://twitter.com/pewdiepie',
        wikipedia_uri: 'https://en.wikipedia.org/wiki/PewDiePie',
        wikipedia_display: 'PewDiePie',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('influencers', null, {});
  }
};
