import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import NumberInput from '../NumberInput';

const variantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};
const variantDefault = 'outlined';
const placeholder = '123';
const helperText = 'helper text';
const labelText = 'label text';

storiesOf('Inputs|NumberInput', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <NumberInput
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder', placeholder)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ))
  .add('helper text', () => (
    <NumberInput
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      helperText={text('Helper Text', helperText)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder', placeholder)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ))
  .add('label', () => (
    <NumberInput
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      label={text('Label Text', labelText)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder', placeholder)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ));
