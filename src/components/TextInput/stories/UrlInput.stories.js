import React, { Fragment, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import UrlInput from '../UrlInput';
import UrlInputDocs from '../docs/UrlInput.docs.mdx';
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

export default {
  decorators: [withKnobs],
  parameters: { component: UrlInput, docs: { page: UrlInputDocs } },
  title: 'Inputs|UrlInput',
};

/** Default Story */
export const DefaultStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <UrlInput
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      onInvalidInput={action('onInvalidInput')}
      onValidInput={action('onValidInput')}
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
        {text('Label Text', 'URL')}
      </StyledLabel>
      <UrlInput
        ariaDescribedBy="helper-text"
        color={select('Color', colorOptions, msBrightPurple)}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        id="base-text-input"
        onChange={handleChange}
        onInvalidInput={action('onInvalidInput')}
        onValidInput={action('onValidInput')}
        placeholder={text('Placeholder', '')}
        value={value}
        variant={select('Variant', variantOptions, 'outlined')}
      />
      <StyledSpan id="helper-text">
        {text('Helper Text', 'Please enter a valid URL address.')}
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
    iconName: select('Icon', iconOptions, 'computer'),
    onClick: mockOnClick,
    position: select('Adornment Position', positionOptions, 'start'),
  };

  return (
    <UrlInput
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      iconAdornment={iconAdornment}
      id="mock-id"
      onChange={handleChange}
      onInvalidInput={action('onInvalidInput')}
      onValidInput={action('onValidInput')}
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
    font: select('Text Adornment Font', fontOptions, robotoCondensed),
    hoverColor: select('Text Adornment Hover Color', colorOptions, msMainGreen),
    onClick: mockOnClick,
    position: select('Adornment Position', positionOptions, 'start'),
    size: select('Text Adornment Font Size', sizeOptions, '1.4rem'),
    text: text('Text Adornment String', 'URL'),
    weight: select('Text Adornment Font Weight', weightOptions, normal),
  };

  return (
    <UrlInput
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      onInvalidInput={action('onInvalidInput')}
      onValidInput={action('onValidInput')}
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
    <UrlInput
      autoFocus
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      onInvalidInput={action('onInvalidInput')}
      onValidInput={action('onValidInput')}
      placeholder={text('Placeholder', '')}
      value={value}
      variant={select('Variant', variantOptions, 'outlined')}
    />
  );
};

AutofocusStory.story = { name: 'autofocus' };
