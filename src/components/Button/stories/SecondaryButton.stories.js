import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';
import SecondaryButton from '../SecondaryButton';
import SecondaryButtonDocs from '../docs/SecondaryButton.docs.mdx';

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
  parameters: { component: SecondaryButton, docs: { page: SecondaryButtonDocs } },
  title: 'Buttons|SecondaryButton',
};

/** */
export const defaultStory = () => (
  <SecondaryButton
    disabled={boolean('Disabled', false)}
    label={text('Label Text', label)}
    onClick={action('onClickButton')}
  />
);

defaultStory.story = { name: 'default' };

/** */
export const withIconStory = () => {
  const icon = iconDictionary(select('Icon', iconOptions, iconDefault), 'mediumSmall', 'button');
  return (
    <SecondaryButton
      disabled={boolean('Disabled', false)}
      icon={icon}
      label={text('Label Text', label)}
      onClick={action('onClickButton')}
    />
  );
};

withIconStory.story = { name: 'with icon' };
