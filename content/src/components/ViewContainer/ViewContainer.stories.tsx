import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import ViewContainer from './ViewContainer';

storiesOf('ViewContainer', module)
  .add('display', () => <ViewContainer title={text('Title', null)} />)
  .add('with children', () => (
    <ViewContainer title={text('Title', null)}>
      <div>
        asdf
      </div>
    </ViewContainer>
  ));
