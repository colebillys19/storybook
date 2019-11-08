import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import TextButton from '../TextButton';
import TextButtonDocs from '../docs/TextButton.docs.mdx';

export default {
  decorators: [withKnobs],
  parameters: { component: TextButton, docs: { page: TextButtonDocs } },
  title: 'Buttons|TextButton',
};

export const defaultStory = () => (
  <TextButton
    disabled={boolean('Disabled', false)}
    label={text('Label Text', 'LABEL TEXT')}
    onClick={action('onClick')}
  />
);

defaultStory.story = { name: 'default' };
