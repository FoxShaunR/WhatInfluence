import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  // Also add any stories in src/components/**/*.stores.js/tsx
  const req = require.context('../src/components', true, /\/(.+\.)?stories\.(js|tsx)$/)
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
