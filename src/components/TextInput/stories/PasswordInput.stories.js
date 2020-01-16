import React, { Fragment, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import PasswordInput from '../PasswordInput';
import PasswordInputDocs from '../docs/PasswordInput.docs.mdx';
import {
  msBrightPurple,
  msMainGreen,
  muiRed,
  ssMainBlue,
  ssYellow,
} from '../../../utils/defaultStyleHelper';
import { StyledLabel, StyledSpan } from '../styles/accessibilityStyles';

export default {
  decorators: [withKnobs],
  parameters: { component: PasswordInput, docs: { page: PasswordInputDocs } },
  title: 'Inputs|PasswordInput',
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
    <PasswordInput
      buttonPosition={select('Button Position', positionOptions, 'end')}
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
        {text('Label Text', 'Password')}
      </StyledLabel>
      <PasswordInput
        ariaDescribedBy="helper-text"
        buttonPosition={select('Button Position', positionOptions, 'end')}
        color={select('Color', colorOptions, msBrightPurple)}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        id="base-text-input"
        onChange={handleChange}
        placeholder={text('Placeholder', '')}
        value={value}
      />
      <StyledSpan id="helper-text">
        {text('Helper Text', 'Hint: (some password hint)')}
      </StyledSpan>
    </Fragment>
  );
};

AccessibleStory.story = { name: 'accessible' };

/** Autofocus Story */
export const AutofocusStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <PasswordInput
      autoFocus
      buttonPosition={select('Button Position', positionOptions, 'end')}
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
