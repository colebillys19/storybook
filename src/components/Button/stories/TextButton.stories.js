import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import TextButton from '../TextButton';
import TextButtonDocs from '../docs/TextButton.docs.mdx';

const label = 'LABEL TEXT';

export default {
  decorators: [withKnobs],
  parameters: { component: TextButton, docs: { page: TextButtonDocs } },
  title: 'Buttons|TextButton',
};

export const defaultStory = () => (
  <TextButton
    disableFocusRipple
    disableRipple
    label={text('Label Text', label)}
    onClick={action('onClickButton')}
  />
);

defaultStory.story = { name: 'default' };
