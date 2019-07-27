import React from 'react';
import InfluencerDetail from './InfluencerDetail';

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

storiesOf('InfluencerDetail', module)
  .add('display', () => <InfluencerDetail />)
  .add('with all props', () => <InfluencerDetail {...INFLUENCER} />);
