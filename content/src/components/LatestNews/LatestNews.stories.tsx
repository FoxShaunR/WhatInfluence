import React from 'react';
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
    fullname: 'Some Person',
    handle: 'InstaPerson',
    link: 'https://kotaku.com/video-games-should-be-weirder-1834991545',
    pubdate: new Date('2019-02-02'),
    source_name: 'Kotaku',
    title: 'Video Games Should Be Weirder',
  },
  {
    author: `Tercius, Shep McAllister, Chelsea Stone, Ana Suarez,  and Corey Foster on Kinja Deals,
    shared by Tercius to Kotaku`,
    description: `An Amazon shirt sale, robovacs, citronella candles, and Civilization VI discount lead off
    Sunday’s best deals from around the web.Read more...`,
    fullname: 'Another Person',
    handle: 'TwitchPerson',
    link: 'https://kinjadeals.theinventory.com/sundays-best-deals-nest-thermostat-herschel-duffel-ba-1836156071',
    pubdate: new Date('2019-02-05'),
    source_name: 'Kotaku',
    title: 'Sundays Best Deals: Nest Thermostat, Herschel Duffel Bag, Crash Bandicoot, Echo Speakers, and More',
  },
];

storiesOf('LatestNews', module)
  .add('display', () => <LatestNews />)
  .add('with news items', () => <LatestNews newsItems={NEWS_ITEMS} />);

storiesOf('LatestNews/NewsItem', module)
  .add('display', () => <NewsItem {...NEWS_ITEMS[0]} />);
