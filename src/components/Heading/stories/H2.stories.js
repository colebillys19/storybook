/**
 * @description Wraps text to create an <h2> header
 */

import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs';

import {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
} from 'utils/defaultStyleHelper';
import H2 from 'components/Heading/H2';

const dmiColorOptions = {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
};

const defaultH2Text = 'H2 HEADER TEXT';

export default {
  decorators: [withKnobs],
  parameters: { component: H2 },
  title: 'Headings|H2',
};

export const defaultStory = () => (
  <H2 style={{ color: select('Color', dmiColorOptions, ssDarkGrey) }}>
    {text('Text', defaultH2Text)}
  </H2>
);

defaultStory.story = { name: 'default' };
