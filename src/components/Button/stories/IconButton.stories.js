import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';
import IconButton from '../IconButton';
import IconButtonDocs from '../docs/IconButton.docs.mdx';

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
  parameters: { component: IconButton, docs: { page: IconButtonDocs } },
  title: 'Buttons|IconButton',
};

export const defaultStory = () => (
  <IconButton disabled={boolean('Disabled', false)} onClick={action('onClickButton')}>
    {iconDictionary(
      select('Icon', iconOptions, iconDefault),
      select('Icon Size', sizeOptions, sizeDefault)
    )}
  </IconButton>
);

defaultStory.story = { name: 'default' };
