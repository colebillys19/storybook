/**
 * @description Wraps text to create an <h3> header
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
import H3 from 'components/Heading/H3';

const dmiColorOptions = {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
};

const defaultH3Text = 'H3 HEADER TEXT';

export default {
  decorators: [withKnobs],
  parameters: { component: H3 },
  title: 'Headings|H3',
};

export const defaultStory = () => (
  <H3 style={{ color: select('Color', dmiColorOptions, ssDarkGrey) }}>
    {text('Text', defaultH3Text)}
  </H3>
);

defaultStory.story = { name: 'default' };
