import React from 'react';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import TextInput from 'components/Input/TextInput';

const variantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};
const variantDefault = 'outlined';
const placeholderText = 'placeholder text';
const helperText = 'helper text';
const labelText = 'label text';

export default {
  decorators: [withKnobs],
  parameters: { component: TextInput },
  title: 'Inputs|TextInput',
};

export const defaultStory = () => (
  <TextInput
    disabled={boolean('Disabled', false)}
    error={boolean('Error', false)}
    multiline={boolean('Multiline', false)}
    onBlur={action('onBlur')}
    onChange={action('onChange')}
    placeholder={text('Placeholder Text', placeholderText)}
    variant={select('Variant', variantOptions, variantDefault)}
  />
);

defaultStory.story = { name: 'default' };

export const helperTextStory = () => (
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
);

helperTextStory.story = { name: 'helper text' };

export const labelStory = () => (
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
);

labelStory.story = { name: 'label' };
