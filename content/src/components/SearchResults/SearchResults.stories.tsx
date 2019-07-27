import React from 'react';
import SearchResults from './SearchResults';
import SearchResultsItem from './SearchResultsItem';

import { storiesOf } from '@storybook/react';

const SEARCH_RESULTS_ITEMS = [
  {
    full_name: 'Some Person',
    handle: 'IG: SomePerson',
  },
  {
    full_name: 'Another Person',
    handle: 'IG: TwitchHandle',
  },
];

storiesOf('SearchResults', module)
  .add('display', () => <SearchResults searchItems={SEARCH_RESULTS_ITEMS} />);

storiesOf('SearchResults/SearchResultsItem', module)
  .add('display', () => <SearchResultsItem {...SEARCH_RESULTS_ITEMS[0]} />);
