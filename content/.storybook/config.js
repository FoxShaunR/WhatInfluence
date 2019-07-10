import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  addDecorator(withKnobs);
  const req = require.context('../src/components', true, /\/(.+\.)?stories\.(js|tsx)$/)

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
