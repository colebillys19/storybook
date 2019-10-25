import React from 'react';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import CurrencyInput from 'components/Input/CurrencyInput';

const variantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};
const variantDefault = 'outlined';
const placeholder = '0.00';
const helperText = 'helper text';
const labelText = 'label text';

export default {
  decorators: [withKnobs],
  parameters: { component: CurrencyInput },
  title: 'Inputs|CurrencyInput',
};

export const defaultStory = () => (
  <CurrencyInput
    disabled={boolean('Disabled', false)}
    error={boolean('Error', false)}
    onBlur={action('onBlur')}
    onChange={action('onChange')}
    placeholder={text('Placeholder', placeholder)}
    variant={select('Variant', variantOptions, variantDefault)}
  />
);

defaultStory.story = { name: 'default' };

export const helperTextStory = () => (
  <CurrencyInput
    disabled={boolean('Disabled', false)}
    error={boolean('Error', false)}
    helperText={text('Helper Text', helperText)}
    onBlur={action('onBlur')}
    onChange={action('onChange')}
    placeholder={text('Placeholder', placeholder)}
    variant={select('Variant', variantOptions, variantDefault)}
  />
);

helperTextStory.story = { name: 'helper text' };

export const labelStory = () => (
  <CurrencyInput
    disabled={boolean('Disabled', false)}
    error={boolean('Error', false)}
    label={text('Label Text', labelText)}
    onBlur={action('onBlur')}
    onChange={action('onChange')}
    placeholder={text('Placeholder', placeholder)}
    variant={select('Variant', variantOptions, variantDefault)}
  />
);

labelStory.story = { name: 'label' };
