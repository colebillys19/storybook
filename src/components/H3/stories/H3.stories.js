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
import { H3 } from '../index';

const dmiColorOptions = {
  dmiLightGreen,
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssPurple,
};

storiesOf('H3|H3', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <H3
      style={{ color: select('color', dmiColorOptions, ssDarkGrey) }}
    >
      H3 Header Text
    </H3>
  ));
