import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs/react';
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

export default {
  decorators: [withKnobs],
  parameters: { component: NumberInput },
  title: 'Inputs|NumberInput',
};

export const defaultStory = () => (
  <NumberInput
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
  <NumberInput
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
  <NumberInput
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
