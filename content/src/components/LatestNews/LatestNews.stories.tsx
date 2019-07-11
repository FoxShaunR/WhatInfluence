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
    fullname: 'SOME PERSON',
    handle: 'InstaPerson',
    link: 'https://kotaku.com/video-games-should-be-weirder-1834991545',
    pubdate: new Date('2019-02-02'),
    source_name: 'Kotaku',
    title: 'Video Games Should Be Weirder',
  },
];

storiesOf('LatestNews', module)
  .add('display', () => <LatestNews />);

storiesOf('LatestNews/NewsItem', module)
  .add('display', () => <NewsItem {...NEWS_ITEMS[0]} />);
