import React, { Fragment, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import TextAreaInput from '../TextAreaInput';
import TextAreaInputDocs from '../docs/TextAreaInput.docs.mdx';
import { msBrightPurple } from '../../../utils/defaultStyleHelper';
import { StyledLabel, StyledSpan } from '../styles/TextAreaInput.styles';

export default {
  decorators: [withKnobs],
  parameters: { component: TextAreaInput, docs: { page: TextAreaInputDocs } },
  title: 'Inputs|TextAreaInput',
};

export const DefaultStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <TextAreaInput
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
      <StyledLabel htmlFor="base-text-input">
        {text('Label Text', 'label text')}
      </StyledLabel>
      <TextAreaInput
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
