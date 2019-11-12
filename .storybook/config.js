import React from 'react';
import requireContext from 'require-context.macro';
import { StylesProvider } from '@material-ui/styles';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import GlobalStyle from './globalStyle';

addDecorator(withA11y);

addDecorator(story => (
  <StylesProvider injectFirst>
    {story()}
    <GlobalStyle />
  </StylesProvider>
));

addParameters({
  backgrounds: [
    { name: 'Gray 1', value: '#f0f0f0', default: true },
    { name: 'Gray 2', value: '#f0f0f5', default: false },
    { name: 'Gray 3', value: '#f0f0fa', default: false },
    { name: 'Gray 4', value: '#f0f0ff', default: false },
    { name: 'Black', value: '#000000', default: false },
    { name: 'DMI Purple', value: '#310078', default: false },
    { name: 'DMI Green', value: '#00db7d', default: false },
  ],
  options: {
    name: 'DMI UI',
    url: '#',
    // goFullScreen: false,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addParameters({ docs: { page: null } });

const components = requireContext(
  '../src/components',
  true,
  /\.stories\.(js)$/
);
// const design = requireContext('../src/design', true, /\.stories\.(js|mdx)$/);
// const documentation = requireContext('../src/documentation', true, /\.stories\.(js|mdx)$/);

configure(
  [
    // design,
    // documentation,
    components,
  ],
  module
);
