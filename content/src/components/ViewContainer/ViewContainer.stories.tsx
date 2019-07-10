import React from 'react';
import ViewContainer from './ViewContainer';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

storiesOf('ViewContainer', module)
  .add('display', () => <ViewContainer title={text('Title', null)} />)
  .add('with children', () => (
    <ViewContainer title={text('Title', null)}>
      <div>
        asdf
      </div>
    </ViewContainer>));;
