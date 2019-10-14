import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

import ThemeProvider from './ThemeProvider';
import GlobalStyle from './globalStyle';

addDecorator(withA11y);

addDecorator(story => (
  <ThemeProvider>
    {story()}
    <GlobalStyle />
  </ThemeProvider>
));

addParameters({ backgrounds: [{ name: 'Silver Site', value: '#F0F0F7', default: true }] });

addParameters({
  backgrounds: [
    { name: "Main Site", value: "#F2F2F2", default: true },
    { name: "Silver Site", value: "#F0F0F7", default: false },
  ]
});

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// // automatically import all files ending in *.stories.js|mdx
// configure(require.context("../src/components", true, /\.stories\.js$/), module);
