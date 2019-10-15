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

const defaultH2Text = 'H2 header text';

storiesOf('Headings|H2', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <H2
      style={{ color: select('color', dmiColorOptions, ssDarkGrey) }}
    >
      {text('text', defaultH2Text)}
    </H2>
  ));
