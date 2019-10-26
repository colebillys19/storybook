import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { configure, addDecorator, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';

import GlobalStyle from './globalStyle';

import { msLightGrey, ssLightGrey } from '../src/utils/defaultStyleHelper';

addDecorator(withA11y);

addDecorator(story => (
  <StylesProvider injectFirst>
    {story()}
    <GlobalStyle />
  </StylesProvider>
));

addParameters({
  backgrounds: [
    { name: 'Main Site', value: msLightGrey, default: true },
    { name: 'Silver Site', value: ssLightGrey, default: false },
  ]
});

// const req = requireContext('../src', true, /\.stories\.(js|mdx)$/);
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);

// function loadStories() {
  // req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);
