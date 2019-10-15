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
  ssPurple,
  ssMainBlue,
} from '../../../shared/defaultStyleHelper';
import { H1 } from '../index';

const dmiColorOptions = {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
};

const defaultH1Text = 'H1 header text';

storiesOf('Headings|H1', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <H1
      style={{ color: select('color', dmiColorOptions, ssDarkGrey) }}
    >
      {text('text', defaultH1Text)}
    </H1>
  ));
