import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import BaseTextInput from '../BaseTextInput';
import BaseTextInputDocs from '../docs/BaseTextInput.docs.mdx';
import { msBrightPurple } from '../../../utils/defaultStyleHelper';
import { StyledLabel, StyledSpan } from '../styles/BaseTextInput.styles';

export default {
  decorators: [withKnobs],
  parameters: { component: BaseTextInput, docs: { page: BaseTextInputDocs } },
  title: 'Inputs|BaseTextInput',
};

export const defaultStory = () => (
  <BaseTextInput
    color={text('Color', msBrightPurple)}
    defaultValue={text('Default Value', '')}
    disabled={boolean('Disabled', false)}
    error={boolean('Error', false)}
    fullWidth={boolean('Full Width', false)}
    id="mock-id"
    inputProps={{ 'aria-describedby': 'mock-aria-describedby' }}
    onBlur={action('onBlur')}
    onChange={action('onChange')}
    placeholder={text('Placeholder', '')}
    readOnly={boolean('Read Only', false)}
    value={text('Value', '')}
  />
);

defaultStory.story = { name: 'default' };

export const accessibleStory = () => (
  <Fragment>
    <StyledLabel for="base-text-input">
      {text('Label Text', 'label text')}
    </StyledLabel>
    <BaseTextInput
      color={text('Color', msBrightPurple)}
      defaultValue={text('Default Value', '')}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      fullWidth={boolean('Full Width', false)}
      id="base-text-input"
      inputProps={{ 'aria-describedby': 'helper-text' }}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder={text('Placeholder', '')}
      readOnly={boolean('Read Only', false)}
      value={text('Value', '')}
    />
    <StyledSpan id="helper-text">
      {text('Helper Text', 'helper text')}
    </StyledSpan>
  </Fragment>
);

accessibleStory.story = { name: 'accessible' };
