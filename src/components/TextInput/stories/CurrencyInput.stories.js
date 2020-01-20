import React, { Fragment, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import CurrencyInput from '../CurrencyInput';
import CurrencyInputDocs from '../docs/CurrencyInput.docs.mdx';
import {
  msBrightPurple,
  msMainGreen,
  typography,
} from '../../../utils/defaultStyleHelper';
import {
  colorOptions,
  iconOptions,
  positionOptions,
  StyledLabel,
  StyledSpan,
  variantOptions,
} from '../../../utils/storyConstants';

/* eslint-disable quote-props */
const currencies = {
  'australian-dollar': 'australian-dollar',
  'canadian-dollar': 'canadian-dollar',
  'euro': 'euro',
  'franc': 'franc',
  'none': '',
  'pound': 'pound',
  'rand': 'rand',
  'us-dollar': 'us-dollar',
  'yen/renminbi': 'yen/renminbi',
};
/* eslint-enable quote-props */

export default {
  decorators: [withKnobs],
  parameters: { component: CurrencyInput, docs: { page: CurrencyInputDocs } },
  title: 'Inputs|CurrencyInput',
};

/** Default Story */
export const DefaultStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <CurrencyInput
      color={select('Color', colorOptions, msBrightPurple)}
      currency={select('Currency', currencies, 'us-dollar')}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      value={value}
      variant={select('Variant', variantOptions, 'outlined')}
    />
  );
};

DefaultStory.story = { name: 'default' };

/** Accessible Story */
export const AccessibleStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <StyledLabel htmlFor="base-text-input">
        {text('Label Text', 'Payment Input')}
      </StyledLabel>
      <CurrencyInput
        ariaDescribedBy="helper-text"
        color={select('Color', colorOptions, msBrightPurple)}
        currency={select('Currency', currencies, 'us-dollar')}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        id="base-text-input"
        onChange={handleChange}
        placeholder={text('Placeholder', '')}
        value={value}
        variant={select('Variant', variantOptions, 'outlined')}
      />
      <StyledSpan id="helper-text">
        {text('Helper Text', 'Please enter the amount you wish to pay.')}
      </StyledSpan>
    </Fragment>
  );
};

AccessibleStory.story = { name: 'accessible' };

/** With Icon Adornment Story */
export const WithIconAdornmentStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  const mockOnClick = boolean('onClick Passed', false) ? () => null : null;

  const iconAdornment = {
    color: select('Icon Color', colorOptions, msBrightPurple),
    hoverColor: select('Icon Hover Color', colorOptions, msMainGreen),
    iconName: select('Icon', iconOptions, 'dollar'),
    onClick: mockOnClick,
    position: select('Adornment Position', positionOptions, 'start'),
  };

  return (
    <CurrencyInput
      color={select('Color', colorOptions, msBrightPurple)}
      currency={select('Currency', currencies, '')}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      iconAdornment={iconAdornment}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      value={value}
      variant={select('Variant', variantOptions, 'outlined')}
    />
  );
};

WithIconAdornmentStory.story = { name: 'with icon adornment' };

/** With Text Adornment Story */
export const WithTextAdornmentStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  const mockOnClick = boolean('onClick Passed', false) ? () => null : null;

  const {
    font: {
      montserrat,
      overpass,
      robotoCondensed,
    },
    size: {
      s1,
      s2,
      s3,
    },
    weight: {
      bold,
      light,
      normal,
    },
  } = typography;

  const fontOptions = {
    montserrat,
    overpass,
    robotoCondensed,
  };

  const sizeOptions = {
    '1.2rem': s1,
    '1.4rem': s2,
    '1.6rem': s3,
  };

  const weightOptions = {
    bold,
    light,
    normal,
  };

  const textAdornment = {
    color: select('Text Adornment Color', colorOptions, msBrightPurple),
    font: select('Text Adornment Font', fontOptions, montserrat),
    hoverColor: select('Text Adornment Hover Color', colorOptions, msMainGreen),
    onClick: mockOnClick,
    position: select('Adornment Position', positionOptions, 'start'),
    size: select('Text Adornment Font Size', sizeOptions, '1.4rem'),
    text: text('Text Adornment String', 'PAYMENT'),
    weight: select('Text Adornment Font Weight', weightOptions, normal),
  };

  return (
    <CurrencyInput
      color={select('Color', colorOptions, msBrightPurple)}
      currency={select('Currency', currencies, 'us-dollar')}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      textAdornment={textAdornment}
      value={value}
      variant={select('Variant', variantOptions, 'outlined')}
    />
  );
};

WithTextAdornmentStory.story = { name: 'with text adornment' };

/** Autofocus Story */
export const AutofocusStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <CurrencyInput
      autoFocus
      color={select('Color', colorOptions, msBrightPurple)}
      currency={select('Currency', currencies, 'us-dollar')}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      value={value}
      variant={select('Variant', variantOptions, 'outlined')}
    />
  );
};

AutofocusStory.story = { name: 'autofocus' };
