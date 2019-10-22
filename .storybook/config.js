import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

import ThemeProvider from './ThemeProvider';
import GlobalStyle from './globalStyle';

import { msLightGrey, ssLightGrey } from '../src/utils/defaultStyleHelper';

addDecorator(withA11y);

addDecorator(story => (
  <ThemeProvider>
    {story()}
    <GlobalStyle />
  </ThemeProvider>
));

addParameters({
  backgrounds: [
    { name: 'Main Site', value: msLightGrey, default: true },
    { name: 'Silver Site', value: ssLightGrey, default: false },
  ]
});

const req = requireContext('../src/components', true, /\.stories\.(js|mdx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
