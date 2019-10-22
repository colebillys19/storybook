import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import CurrencyInput from '../CurrencyInput';

const variantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};
const variantDefault = 'outlined';
const placeholder = '0.00';
const helperText = 'helper text';
const labelText = 'label text';

storiesOf('Inputs|CurrencyInput', module)
  .addParameters({ component: CurrencyInput })
  .addDecorator(withKnobs)
  .add('default', () => (
    <CurrencyInput
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder', placeholder)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ))
  .add('helper text', () => (
    <CurrencyInput
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
    <CurrencyInput
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      label={text('Label Text', labelText)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder', placeholder)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ));
