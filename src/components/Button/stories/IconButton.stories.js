import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';

import IconButton from '../IconButton';

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
  parameters: { component: IconButton },
  title: 'Buttons|IconButton',
};

export const defaultStory = () => (
  <IconButton onClick={action('onClickButton')}>
    {iconDictionary(
      select('Icon', iconOptions, iconDefault),
      select('Icon Size', sizeOptions, sizeDefault)
    )}
  </IconButton>
);

defaultStory.story = { name: 'default' };

export const disabledStory = () => (
  <IconButton disabled onClick={action('onClickButton')}>
    {iconDictionary(
      select('Icon', iconOptions, iconDefault),
      select('Icon Size', sizeOptions, sizeDefault)
    )}
  </IconButton>
);

disabledStory.story = { name: 'disabled' };
