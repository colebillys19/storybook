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
import { H1 } from '../index';

const dmiColorOptions = {
  dmiLightGreen,
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssPurple,
};

storiesOf('H1|H1', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <H1
      style={{ color: select('color', dmiColorOptions, ssDarkGrey) }}
    >
      H1 Header Text
    </H1>
  ));

