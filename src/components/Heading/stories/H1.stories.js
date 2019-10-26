/**
 * @description Wraps text to create an <h1> header
 */

import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs';

import {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssPurple,
  ssMainBlue,
} from 'utils/defaultStyleHelper';
import H1 from '../H1';

const dmiColorOptions = {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
};

const defaultH1Text = 'H1 HEADER TEXT';

export default {
  decorators: [withKnobs],
  parameters: { component: H1 },
  title: 'Headings|H1',
};

export const defaultStory = () => (
  <H1 style={{ color: select('Color', dmiColorOptions, ssDarkGrey) }}>
    {text('Text', defaultH1Text)}
  </H1>
);

defaultStory.story = { name: 'default' };
