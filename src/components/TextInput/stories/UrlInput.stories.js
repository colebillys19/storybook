import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import UrlInput from '../UrlInput';
import UrlInputDocs from '../docs/UrlInput.docs.mdx';
import { msBrightPurple } from '../../../utils/defaultStyleHelper';
import { colorOptions, variantOptions } from '../../../utils/storyConstants';

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

  const handleInvalidInput = () => {
    console.log('invalid');
  };

  return (
    <form>
      <UrlInput
        color={select('Color', colorOptions, msBrightPurple)}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        id="mock-id"
        onChange={handleChange}
        onInvalidInput={handleInvalidInput}
        placeholder={text('Placeholder', '')}
        value={value}
        variant={select('Variant', variantOptions, 'outlined')}
      />
      <button type="submit">submit</button>
    </form>
  );
};

DefaultStory.story = { name: 'default' };
