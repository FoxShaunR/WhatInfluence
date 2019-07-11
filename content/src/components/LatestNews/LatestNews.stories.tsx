import React from 'react';
import LatestNews from './LatestNews';

import { storiesOf } from '@storybook/react';

storiesOf('LatestNews', module)
  .add('display', () => <LatestNews />);
