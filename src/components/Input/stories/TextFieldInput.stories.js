import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import TextFieldInput from '../TextFieldInput';

const variantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};
const variantDefault = 'outlined';
const placeholderText = 'placeholder text';
const helperText = 'helper text';
const labelText = 'label text';

storiesOf('Inputs|TextFieldInput', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextFieldInput
      error={boolean('Error', false)}
      multiline={boolean('Multiline', false)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder Text', placeholderText)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ))
  .add('helper text', () => (
    <TextFieldInput
      error={boolean('Error', false)}
      helperText={text('Helper Text', helperText)}
      multiline={boolean('Multiline', false)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder Text', placeholderText)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ))
  .add('label', () => (
    <TextFieldInput
      error={boolean('Error', false)}
      label={text('Label Text', labelText)}
      multiline={boolean('Multiline', false)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder Text', placeholderText)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ));
