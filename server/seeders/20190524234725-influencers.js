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
        twitch_display: 'PewDiePie',
        twitch_uri: 'https://www.twitch.tv/pewdiepie',
        twitter_display: 'PewDiePie',
        twitter_uri: 'https://twitter.com/pewdiepie',
        wikipedia_uri: 'https://en.wikipedia.org/wiki/PewDiePie',
        wikipedia_display: 'PewDiePie',
        primary_display: 'PewDiePie',
        primary_uri: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        first_name: 'Turner',
        last_name: 'Tenney',
        instagram_uri: 'https://www.instagram.com/Tfue/',
        instagram_display: 'Tfue',
        youtube_display: 'Tfue',
        youtube_uri: 'https://www.youtube.com/channel/UC9lSZSYpDDE18hoFA7YlBpw',
        web_uri: 'http://turnertenney.com/',
        web_display: 'turnertenney.com',
        twitch_display: 'Tfue',
        twitch_uri: 'https://www.twitch.tv/Tfue',
        twitter_display: 'Tfue',
        twitter_uri: 'https://twitter.com/TTfue',
        wikipedia_uri: 'https://en.wikipedia.org/wiki/TFue_Turner_Tenney',
        wikipedia_display: 'TFue Turner Tenney',
        primary_display: 'Tfue',
        primary_uri: 'https://www.twitch.tv/Tfue',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('influencers', null, {});
  }
};
