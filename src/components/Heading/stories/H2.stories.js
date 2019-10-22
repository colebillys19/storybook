/**
 * @description Wraps text to create an <h2> header
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
import { H2 } from '../index';

const dmiColorOptions = {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
};

const defaultH2Text = 'H2 HEADER TEXT';

storiesOf('Headings|H2', module)
  .addParameters({ component: H2 })
  .addDecorator(withKnobs)
  .add('default', () => (
    <H2
      style={{ color: select('Color', dmiColorOptions, ssDarkGrey) }}
    >
      {text('Text', defaultH2Text)}
    </H2>
  ));
