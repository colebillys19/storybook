import React from 'react';

import BaseTextInput from '../BaseTextInput';
import BaseTextInputDocs from '../docs/BaseTextInput.docs.mdx';

export default {
  parameters: { component: BaseTextInput, docs: { page: BaseTextInputDocs } },
  title: 'Inputs|BaseTextInput',
};

export const defaultStory = () => <BaseTextInput label="label text" />;

defaultStory.story = { name: 'default' };
