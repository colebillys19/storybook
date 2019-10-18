/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
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
  ssPurple,
  ssMainBlue,
} from '../../../utils/defaultStyleHelper';
import { H1 } from '../index';

const dmiColorOptions = {
  dmiMainGreen,
  dmiSecondaryColor,
  ssDarkGrey,
  ssMainBlue,
  ssPurple,
};

const defaultH1Text = 'H1 HEADER TEXT';

storiesOf('Headings|H1', module)
  .addParameters({ component: H1 })
  .addDecorator(withKnobs)
  .add('default', () => (
    <H1
      style={{ color: select('Color', dmiColorOptions, ssDarkGrey) }}
    >
      {text('Text', defaultH1Text)}
    </H1>
  ));
