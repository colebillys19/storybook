import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import PrimaryButton from '../PrimaryButton';
import PrimaryButtonDocs from '../docs/PrimaryButton.docs.mdx';
import iconDictionary from '../../../utils/iconDictionary';
import { iconOptions } from '../../../utils/storyConstants';

export default {
  decorators: [withKnobs],
  parameters: { component: PrimaryButton, docs: { page: PrimaryButtonDocs } },
  title: 'Buttons|PrimaryButton',
};

export const defaultStory = () => (
  <PrimaryButton
    disabled={boolean('Disabled', false)}
    label={text('Label Text', 'LABEL TEXT')}
    onClick={action('onClick')}
  />
);

defaultStory.story = { name: 'default' };

export const withIconStory = () => {
  const Icon = iconDictionary(select('Icon', iconOptions, 'inbox'), 'mediumSmall', 'button');
  return (
    <PrimaryButton
      disabled={boolean('Disabled', false)}
      Icon={Icon}
      label={text('Label Text', 'LABEL TEXT')}
      onClick={action('onClick')}
    />
  );
};

withIconStory.story = { name: 'with icon' };
