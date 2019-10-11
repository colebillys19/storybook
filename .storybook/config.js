import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

// import ThemeProvider from './ThemeProvider';
import { GlobalStyle } from './globalStyle';

addDecorator(withA11y);

addDecorator(story => (
  <>
    {story()}
    {/* <GlobalStyle /> */}
  </>
));

addParameters({ backgrounds: [{ name: 'Silver Site', value: '#F0F0F7', default: true }] });

// automatically import all files ending in *.stories.js|mdx
configure(require.context('../src/components', true, /\.stories\.js$/), module);
