import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

addDecorator(withA11y);
addDecorator(story => (
  <Fragment>
    {story()}
  </Fragment>
));

// automatically import all files ending in *.stories.js|mdx
configure(require.context('../src/components', true, /\.stories\.js$/), module);
