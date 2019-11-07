import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import GhostButton from '../GhostButton';
import GhostButtonDocs from '../docs/GhostButton.docs.mdx';
import iconDictionary from '../../../utils/iconDictionary';
import { iconOptions } from '../../../utils/storyConstants';

const label = 'LABEL TEXT';

export default {
  decorators: [withKnobs],
  parameters: { component: GhostButton, docs: { page: GhostButtonDocs } },
  title: 'Buttons|GhostButton',
};

export const defaultStory = () => (
  <GhostButton
    disabled={boolean('Disabled', false)}
    label={text('Label Text', label)}
    onClick={action('onClick')}
  />
);

defaultStory.story = { name: 'default' };

export const withIconStory = () => {
  const Icon = iconDictionary(select('Icon', iconOptions, 'inbox'), 'mediumSmall', 'button');
  return (
    <GhostButton
      disabled={boolean('Disabled', false)}
      Icon={Icon}
      label={text('Label Text', label)}
      onClick={action('onClick')}
    />
  );
};

withIconStory.story = { name: 'with icon' };
