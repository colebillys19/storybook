<<<<<<< HEAD
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import "storybook-chromatic";

addDecorator(withA11y);
=======
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

addDecorator(withA11y);

addParameters({ backgrounds: [{ name: 'Silver Site', value: '#F0F0F7', default: true }] });
>>>>>>> 829170aa35cbe4d90516d5380ad884b008006d5b

addParameters({
  backgrounds: [{ name: "Silver Site", value: "#F0F0F7", default: true }]
});
// automatically import all files ending in *.stories.js|mdx
configure(require.context("../src/components", true, /\.stories\.js$/), module);
