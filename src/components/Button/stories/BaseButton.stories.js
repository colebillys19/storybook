import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

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

const sizeOptions = {
  large: 'large',
  medium: 'medium',
  mediumLarge: 'mediumLarge',
  mediumSmall: 'mediumSmall',
  small: 'small',
  xSmall: 'xSmall',
};
const sizeDefaultA = 'medium';
const sizeDefaultB = 'mediumSmall';

export default {
  decorators: [withKnobs],
  parameters: { component: BaseButton, docs: { page: BaseButtonDocs } },
  title: 'Buttons|BaseButton',
};

/** */
export const defaultStory = () => (
  <BaseButton
    disableFocusRipple
    disableRipple
    label={text('Label Text', label)}
    onClick={action('onClickButton')}
  />
);

defaultStory.story = { name: 'text' };

/** */
export const iconStory = () => {
  const icon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Icon Size', sizeOptions, sizeDefaultA),
  );
  return (
    <BaseButton
      disableFocusRipple
      disableRipple
      icon={icon}
      onClick={action('onClickButton')}
    />
  );
};

iconStory.story = { name: 'icon' };

/** */
export const textIconStory = () => {
  const icon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Icon Size', sizeOptions, sizeDefaultB),
    'button'
  );
  return (
    <BaseButton
      disableFocusRipple
      disableRipple
      icon={icon}
      label={text('Label Text', label)}
      onClick={action('onClickButton')}
    />
  );
};

textIconStory.story = { name: 'text + icon' };
