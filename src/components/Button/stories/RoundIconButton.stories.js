import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';
import RoundIconButton from '../RoundIconButton';
import RoundIconButtonDocs from '../docs/RoundIconButton.docs.mdx';

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
  parameters: { component: RoundIconButton, docs: { page: RoundIconButtonDocs } },
  title: 'Buttons|RoundIconButton',
};

export const defaultStory = () => {
  const Icon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Icon Size', sizeOptions, sizeDefault)
  );
  return (
    <RoundIconButton
      disabled={boolean('Disabled', false)}
      Icon={Icon}
      onClick={action('onClickButton')}
    />
  );
};

defaultStory.story = { name: 'default' };
