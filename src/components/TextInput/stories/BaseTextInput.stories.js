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
import { msBrightPurple } from '../../../utils/defaultStyleHelper';
import { StyledLabel, StyledSpan } from '../styles/BaseTextInput.styles';
import iconDictionary from '../../../utils/iconDictionary';

export default {
  decorators: [withKnobs],
  parameters: { component: BaseTextInput, docs: { page: BaseTextInputDocs } },
  title: 'Inputs|BaseTextInput',
};

const iconOptions = {
  Inbox: 'inbox',
  Profile: 'profile',
  Warning: 'warning',
};

const iconPlacementOptions = { End: 'end', Start: 'start' };

export const DefaultStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <BaseTextInput
      color={text('Color', msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      fullWidth={boolean('Full Width', false)}
      id="mock-id"
      inputProps={{ 'aria-describedby': 'mock-aria-describedby' }}
      onBlur={action('onBlur')}
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      readOnly={boolean('Read Only', false)}
      value={value}
    />
  );
};

DefaultStory.story = { name: 'default' };

export const AccessibleStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <StyledLabel for="base-text-input">
        {text('Label Text', 'label text')}
      </StyledLabel>
      <BaseTextInput
        color={text('Color', msBrightPurple)}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        fullWidth={boolean('Full Width', false)}
        id="base-text-input"
        inputProps={{ 'aria-describedby': 'helper-text' }}
        onBlur={action('onBlur')}
        onChange={handleChange}
        placeholder={text('Placeholder', '')}
        readOnly={boolean('Read Only', false)}
        value={value}
      />
      <StyledSpan id="helper-text">
        {text('Helper Text', 'helper text')}
      </StyledSpan>
    </Fragment>
  );
};

AccessibleStory.story = { name: 'accessible' };

export const WithAdornmentStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <BaseTextInput
      adornmentContent={
        iconDictionary(select('Icon', iconOptions, 'inbox'), 'mediumSmall')
      }
      adornmentPlacement={select('Icon Placement', iconPlacementOptions, 'start')}
      color={text('Color', msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      fullWidth={boolean('Full Width', false)}
      id="mock-id"
      inputProps={{ 'aria-describedby': 'mock-aria-describedby' }}
      onBlur={action('onBlur')}
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      readOnly={boolean('Read Only', false)}
      value={value}
    />
  );
};

WithAdornmentStory.story = { name: 'with adornment' };
