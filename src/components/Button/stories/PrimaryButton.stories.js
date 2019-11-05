import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';
import PrimaryButton from '../PrimaryButton';
import PrimaryButtonDocs from '../docs/PrimaryButton.docs.mdx';

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

const sizeDefault = 'mediumSmall';

export default {
  decorators: [withKnobs],
  parameters: { component: PrimaryButton, docs: { page: PrimaryButtonDocs } },
  title: 'Buttons|PrimaryButton',
};

export const defaultStory = () => {
  const icon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Icon Size', sizeOptions, sizeDefault),
    'button'
  );
  return (
    <PrimaryButton
      icon={icon}
      label={text('Label Text', label)}
      onClick={action('onClickButton')}
    />
  );
};

defaultStory.story = { name: 'default' };
