import React from 'react';
import Header from './Header';
import Search from './Search';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

storiesOf('Header/Header', module)
  .add('display', () => <Header />);

storiesOf('Header/Search', module)
  .add('display', () => <Search />);
