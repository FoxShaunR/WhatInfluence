import React from 'react';
import InfluencerItem from './InfluencerItem';
import LatestNews from './LatestNews';
import NewsItem from './NewsItem';

import { storiesOf } from '@storybook/react';

const NEWS_ITEMS = [
  {
    author: 'Joshua Rivera',
    description: `I’ve been thinking a lot about yesterday’s surprise announcement of Playdate, the new
    handheld games experiment from Firewatch publisher Panic. More than anything, it’s weird: A small,
    single-purpose handheld with a set 12-week program of mystery games is the sort of thing that
    demands your attention. And yes, it has…Read more...`,
    influencers: [
      {
        full_name: 'Some Person',
        primary_display: 'InstaPerson',
        primary_uri: 'https://www.twitch.com/pewdiepie/',
      },
    ],
    link: 'https://kotaku.com/video-games-should-be-weirder-1834991545',
    news_source: {
      id: 0,
      name: 'Kotaku',
    },
    pubdate: '2019-02-02',
    title: 'Video Games Should Be Weirder',
  },
  {
    author: `Tercius, Shep McAllister, Chelsea Stone, Ana Suarez,  and Corey Foster on Kinja Deals,
    shared by Tercius to Kotaku`,
    description: `An Amazon shirt sale, robovacs, citronella candles, and Civilization VI discount lead off
    Sunday’s best deals from around the web.Read more...`,
    influencers: [
      {
        full_name: 'Another Person',
        primary_display: 'TwitchPerson',
        primary_uri: 'https://www.instagram.com/pewdiepie/',
      },
    ],
    link: 'https://kinjadeals.theinventory.com/sundays-best-deals-nest-thermostat-herschel-duffel-ba-1836156071',
    news_source: {
      id: 0,
      name: 'Kotaku',
    },
    pubdate: '2019-02-05',
    title: 'Sundays Best Deals: Nest Thermostat, Herschel Duffel Bag, Crash Bandicoot, Echo Speakers, and More',
  },
];

const INFLUENCER_ITEMS = [
  {
    full_name: 'Some Person',
    primary_display: 'IG: SomePerson',
    primary_uri: 'https://www.instagram.com/pewdiepie/',
  },
  {
    full_name: 'Another Person',
    primary_display: 'IG: TwitchHandle',
    primary_uri: 'https://www.facebook.com/pewdiepie/',
  },
];

storiesOf('LatestNews', module)
  .add('display', () => <LatestNews />)
  .add('with news items', () => <LatestNews newsItems={NEWS_ITEMS} />)
  .add('with trending influencers', () => <LatestNews trendingInfluencers={INFLUENCER_ITEMS} />);

storiesOf('LatestNews/NewsItem', module)
  .add('display', () => <NewsItem {...NEWS_ITEMS[0]} />);

storiesOf('LatestNews/InfluencerItem', module)
  .add('display', () => <InfluencerItem {...INFLUENCER_ITEMS[0]} />);
