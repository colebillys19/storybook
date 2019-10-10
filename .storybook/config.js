import { configure, addDecorator, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

addDecorator(withA11y);

addParameters({ backgrounds: [{ name: 'Silver Site', value: '#F0F0F7', default: true }] });

addParameters({
  backgrounds: [{ name: "Silver Site", value: "#F0F0F7", default: true }]
});

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// // automatically import all files ending in *.stories.js|mdx
// configure(require.context("../src/components", true, /\.stories\.js$/), module);

