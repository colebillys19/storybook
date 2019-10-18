/**
 * @description Wraps text to create an <h3> header
 */


import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
} from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs';

import {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
} from '../../../utils/defaultStyleHelper';
import { H3 } from '../index';

const dmiColorOptions = {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
};

const defaultH3Text = 'H3 HEADER TEXT';

storiesOf('Headings|H3', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <H3
      style={{ color: select('Color', dmiColorOptions, ssDarkGrey) }}
    >
      {text('Text', defaultH3Text)}
    </H3>
  ));
