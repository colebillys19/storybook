import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import TextInput from '../TextInput';

const variantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};
const variantDefault = 'outlined';
const placeholderText = 'placeholder text';
const helperText = 'helper text';
const labelText = 'label text';

storiesOf('Inputs|TextInput', module)
  .addParameters({ component: TextInput })
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextInput
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      multiline={boolean('Multiline', false)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder Text', placeholderText)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ))
  .add('helper text', () => (
    <TextInput
      disabled={boolean('Disabled', false)}
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
    <TextInput
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      label={text('Label Text', labelText)}
      multiline={boolean('Multiline', false)}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder Text', placeholderText)}
      variant={select('Variant', variantOptions, variantDefault)}
    />
  ));
