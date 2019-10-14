import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
} from '@storybook/addon-knobs/react';


import {
  dmiLightGreen,
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssPurple,
} from '../../../shared/defaultStyleHelper';
import { H2 } from '../index';

const dmiColorOptions = {
  dmiLightGreen,
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssPurple,
};

storiesOf('H2|H2', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <H2
      style={{ color: select('color', dmiColorOptions, ssDarkGrey) }}
    >
      H2 Header Text
    </H2>
  ));
