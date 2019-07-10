import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter as Router } from 'react-router-dom';

const withRouter = (Comp) => (
  <Router>
    <Comp />
  </Router>
);

function loadStories() {
  addDecorator(withKnobs);
  addDecorator(withRouter);
  const req = require.context('../src/components', true, /\/(.+\.)?stories\.(js|tsx)$/)

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
