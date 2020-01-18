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
import { msBrightPurple } from '../../../utils/defaultStyleHelper';
import {
  colorOptions,
  positionOptions,
  StyledLabel,
  StyledSpan,
  variantOptions,
} from '../../../utils/storyConstants';

export default {
  decorators: [withKnobs],
  parameters: { component: PasswordInput, docs: { page: PasswordInputDocs } },
  title: 'Inputs|PasswordInput',
};

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
      noButton={boolean('No Button', false)}
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
        {text('Label Text', 'Password')}
      </StyledLabel>
      <PasswordInput
        ariaDescribedBy="helper-text"
        buttonPosition={select('Button Position', positionOptions, 'end')}
        color={select('Color', colorOptions, msBrightPurple)}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        id="base-text-input"
        noButton={boolean('No Button', false)}
        onChange={handleChange}
        placeholder={text('Placeholder', '')}
        value={value}
        variant={select('Variant', variantOptions, 'outlined')}
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
      noButton={boolean('No Button', false)}
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      value={value}
      variant={select('Variant', variantOptions, 'outlined')}
    />
  );
};

AutofocusStory.story = { name: 'autofocus' };
