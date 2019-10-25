import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';

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

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);

