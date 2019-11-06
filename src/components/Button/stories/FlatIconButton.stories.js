import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';
import FlatIconButton from '../FlatIconButton';
import FlatIconButtonDocs from '../docs/FlatIconButton.docs.mdx';

const tooltipText = 'tooltip text';

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
const sizeDefault = 'medium';

export default {
  decorators: [withKnobs],
  parameters: { component: FlatIconButton, docs: { page: FlatIconButtonDocs } },
  title: 'Buttons|FlatIconButton',
};

export const defaultStory = () => {
  const Icon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Icon Size', sizeOptions, sizeDefault),
  );
  return (
    <FlatIconButton
      disabled={boolean('Disabled', false)}
      Icon={Icon}
      onClick={action('onClickButton')}
      tooltipText={text('Tooltip Text', tooltipText)}
    />
  );
};

defaultStory.story = { name: 'default' };
