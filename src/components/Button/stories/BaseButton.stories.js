import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';
import BaseButton from '../BaseButton';
import BaseButtonDocs from '../docs/BaseButton.docs.mdx';

const label = 'LABEL TEXT';

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};
const iconDefault = 'inbox';

export default {
  decorators: [withKnobs],
  parameters: { component: BaseButton, docs: { page: BaseButtonDocs } },
  title: 'Buttons|BaseButton',
};

/** */
export const defaultStory = () => (
  <BaseButton
    disabled={boolean('Disabled', false)}
    label={text('Label Text', label)}
    onClick={action('onClick')}
  />
);

defaultStory.story = { name: 'default' };

/** */
export const withIconStory = () => {
  const Icon = iconDictionary(select('Icon', iconOptions, iconDefault), 'mediumSmall', 'button');
  return (
    <BaseButton
      disabled={boolean('Disabled', false)}
      Icon={Icon}
      label={text('Label Text', label)}
      onClick={action('onClick')}
    />
  );
};

withIconStory.story = { name: 'with icon' };
