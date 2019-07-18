import React from 'react';
import SearchResults from './SearchResults';

import { storiesOf } from '@storybook/react';

storiesOf('SearchResults', module)
  .add('display', () => <SearchResults />);
