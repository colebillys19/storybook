import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  select,
  text,
} from '@storybook/addon-knobs/react';


import TextField from '../Texfield';
import {
  msBrightPurple,
  msDarkGrey,
  msHoverPurple,
  msMainGreen,
} from 'utils/defaultStyleHelper';


export default {
  component: TextField,
  title: 'Textfield',
};

const marginOptions = {
  dense: 'dense',
  none: 'none',
  normal: 'normal',
};
const defaultMargin = 'none';

const defaultLabel = 'Text Field Label';

const variantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};
const defaultVariant = 'standard';

const colorOptions = {
  msBrightPurple,
  msDarkGrey,
  msHoverPurple,
  msMainGreen,
};
const defaultColor = msBrightPurple;


export const story1 = () => (
  <TextField
    color={select('Underline Color', colorOptions, defaultColor)}
    label={text('Label', defaultLabel)}
    margin={select('Margin', marginOptions, defaultMargin)}
    onChange={action('onChange')}
    variant={select('Variant', variantOptions, defaultVariant)}
  />
);

story1.story = { name: 'default' };
