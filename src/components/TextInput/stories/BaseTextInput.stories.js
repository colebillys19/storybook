import React from 'react';

import BaseTextInput from '../BaseTextInput';
import BaseTextInputDocs from '../docs/BaseTextInput.docs.mdx';

export default {
  parameters: { component: BaseTextInput, docs: { page: BaseTextInputDocs } },
  title: 'Inputs|BaseTextInput',
};

export const defaultStory = () => (
  <BaseTextInput
    id="mock-id"
    inputProps={{ 'aria-describedby': 'mock-aria-describedby' }}
  />
);

defaultStory.story = { name: 'default' };
