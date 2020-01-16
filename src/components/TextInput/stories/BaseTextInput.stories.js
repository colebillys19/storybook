import React, { Fragment, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import BaseTextInput from '../BaseTextInput';
import BaseTextInputDocs from '../docs/BaseTextInput.docs.mdx';
import {
  msBrightPurple,
  msMainGreen,
  muiRed,
  ssMainBlue,
  ssYellow,
  typography,
} from '../../../utils/defaultStyleHelper';
import { StyledLabel, StyledSpan } from '../styles/BaseTextInput.styles';
// import IconDictionary from '../../../utils/IconDictionary';

export default {
  decorators: [withKnobs],
  parameters: { component: BaseTextInput, docs: { page: BaseTextInputDocs } },
  title: 'Inputs|BaseTextInput',
};

const colorOptions = {
  msBrightPurple,
  msMainGreen,
  muiRed,
  ssMainBlue,
  ssYellow,
};

const positionOptions = { end: 'end', start: 'start' };

/** Default Story */
export const DefaultStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <BaseTextInput
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      value={value}
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
        {text('Label Text', 'label text')}
      </StyledLabel>
      <BaseTextInput
        ariaDescribedBy="helper-text"
        color={select('Color', colorOptions, msBrightPurple)}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        id="base-text-input"
        onChange={handleChange}
        placeholder={text('Placeholder', '')}
        value={value}
      />
      <StyledSpan id="helper-text">
        {text('Helper Text', 'helper text')}
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

  const iconOptions = {
    inbox: 'inbox',
    profile: 'profile',
    warning: 'warning',
  };

  const iconAdornment = {
    color: select('Icon Color', colorOptions, msBrightPurple),
    hoverColor: select('Icon Hover Color', colorOptions, msMainGreen),
    iconName: select('Icon', iconOptions, 'profile'),
    onClick: mockOnClick,
    position: select('Adornment Position', positionOptions, 'start'),
  };

  return (
    <BaseTextInput
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      iconAdornment={iconAdornment}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      value={value}
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
    color: select('Text Adornment Color', colorOptions, msMainGreen),
    font: select('Text Adornment Font', fontOptions, robotoCondensed),
    hoverColor: select('Text Adornment Hover Color', colorOptions, msBrightPurple),
    onClick: mockOnClick,
    position: select('Adornment Position', positionOptions, 'start'),
    size: select('Text Adornment Font Size', sizeOptions, '1.4rem'),
    text: text('Text Adornment String', 'Escrow'),
    weight: select('Text Adornment Font Weight', weightOptions, normal),
  };

  return (
    <BaseTextInput
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      textAdornment={textAdornment}
      value={value}
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
    <BaseTextInput
      autoFocus
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      value={value}
    />
  );
};

AutofocusStory.story = { name: 'autofocus' };

/** Search Story */
export const SearchStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  const searchValues = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <BaseTextInput
      color={select('Color', colorOptions, msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      id="mock-id"
      onChange={handleChange}
      placeholder={text('Placeholder', 'Enter month...')}
      searchValues={searchValues}
      type="search"
      value={value}
    />
  );
};

SearchStory.story = { name: 'with search' };
