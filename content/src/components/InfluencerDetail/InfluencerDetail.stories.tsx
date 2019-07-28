import React from 'react';
import InfluencerDetail from './InfluencerDetail';
import NewsItem from './NewsItem';

import { storiesOf } from '@storybook/react';

// tslint:disable: object-literal-sort-keys
const INFLUENCER = {
  first_name: 'Felix',
  last_name: 'Kjellberg',
  full_name: 'Felix Kjellberg',
  // tslint:disable-next-line: max-line-length
  image_uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/PewDiePie_at_PAX_2015_crop.jpg/256px-PewDiePie_at_PAX_2015_crop.jpg',
  facebook_uri: 'https://www.facebook.com/PewDiePie',
  facebook_display: 'PewDiePie',
  instagram_uri: 'https://www.instagram.com/pewdiepie/',
  instagram_display: 'PewDiePie',
  youtube_uri: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw',
  youtube_display: 'PewDiePie',
  web_uri: 'https://shoppewdiepie.com/',
  web_display: 'PewDiePie',
  twitch_uri: '',
  twitch_display: 'PewDiePie',
  wikipedia_uri: 'https://en.wikipedia.org/wiki/PewDiePie',
  wikipedia_display: '',
  image_attribution: 'Original author: camknows from Seattle, WA, USACropped by WikiKiwi [CC0]',
  twitter_uri: 'https://twitter.com/pewdiepie',
  twitter_display: 'PewDiePie',
  primary_uri: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw',
  primary_display: 'PewDiePie',
};

const NEWS_ITEMS = [
  {
    title: 'Tiny Little GameCube Works, Is Asking To Get Its Cheeks Pinched',
    description: `When Nintendo gets around to releasing a GameCube Mini—remember, all tiny console releases
    to this point have been mere preparation for what will be the greatest collection of 20-30 titles in video
    game history—I really hope it’s as small and cute as this custom-made console.Read more...`,
    link: 'https://kotaku.com/tiny-little-gamecube-works-is-asking-to-get-its-cheeks-1834968740',
    author: 'Luke Plunkett',
    source: 'Kotaku',
    pubdate: '2019-05-23T18:30:00-07:00',
    sentiment: 10,
  },
  {
    title: 'Tiny Little GameCube Works, Is Asking To Get Its Cheeks Pinched',
    description: `When Nintendo gets around to releasing a GameCube Mini—remember, all tiny console releases
    to this point have been mere preparation for what will be the greatest collection of 20-30 titles in video
    game history—I really hope it’s as small and cute as this custom-made console.Read more...`,
    link: 'https://kotaku.com/tiny-little-gamecube-works-is-asking-to-get-its-cheeks-1834968740',
    author: 'Luke Plunkett',
    source: 'Kotaku',
    pubdate: '2019-05-23T18:30:00-07:00',
    sentiment: 5,
  },
  {
    title: 'Pokemon Duel mobile game is shutting down     - CNET',
    description: `You can spend your gems until the service ends on Oct. 31.`,
    link: 'https://kotaku.com/tiny-little-gamecube-works-is-asking-to-get-its-cheeks-1834968740',
    author: 'Corinne Reichert',
    source: 'CNET',
    pubdate: '2019-07-26T15:56:06-07:00',
    sentiment: 0,
  },
  {
    title: 'Pokemon Duel mobile game is shutting down     - CNET',
    description: `You can spend your gems until the service ends on Oct. 31.`,
    link: 'https://kotaku.com/tiny-little-gamecube-works-is-asking-to-get-its-cheeks-1834968740',
    author: 'Corinne Reichert',
    source: 'CNET',
    pubdate: '2019-07-26T15:56:06-07:00',
    sentiment: -5,
  },
  {
    title: 'Pokemon Duel mobile game is shutting down     - CNET',
    description: `You can spend your gems until the service ends on Oct. 31.`,
    link: 'https://kotaku.com/tiny-little-gamecube-works-is-asking-to-get-its-cheeks-1834968740',
    author: 'Corinne Reichert',
    source: 'CNET',
    pubdate: '2019-07-26T15:56:06-07:00',
    sentiment: -10,
  },
];

storiesOf('InfluencerDetail', module)
  .add('display', () => <InfluencerDetail />)
  .add('with all props', () => <InfluencerDetail {...INFLUENCER} news={NEWS_ITEMS} />);

storiesOf('InfluencerDetail/NewsItem', module)
  .add('display', () => <NewsItem {...NEWS_ITEMS[0]} />);
