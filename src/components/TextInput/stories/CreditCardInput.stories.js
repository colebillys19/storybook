import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import CreditCardInput from '../CreditCardInput';
import BaseTextInputDocs from '../docs/BaseTextInput.docs.mdx';
import {
  msBrightPurple,
  msMainGreen,
  muiRed,
  ssMainBlue,
  ssYellow,
} from '../../../utils/defaultStyleHelper';

export default {
  decorators: [withKnobs],
  parameters: { component: CreditCardInput, docs: { page: BaseTextInputDocs } },
  title: 'Inputs|CreditCardInput',
};

const colorOptions = {
  msBrightPurple,
  msMainGreen,
  muiRed,
  ssMainBlue,
  ssYellow,
};

/** Default Story */
export const DefaultStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <CreditCardInput
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
