import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import FlatIconButton from '../FlatIconButton';
import FlatIconButtonDocs from '../docs/FlatIconButton.docs.mdx';
import iconDictionary from '../../../utils/iconDictionary';
import { iconOptions, iconSizeOptions } from '../../../utils/storyConstants';

export default {
  decorators: [withKnobs],
  parameters: { component: FlatIconButton, docs: { page: FlatIconButtonDocs } },
  title: 'Buttons|FlatIconButton',
};

export const defaultStory = () => {
  const Icon = iconDictionary(
    select('Icon', iconOptions, 'inbox'),
    select('Icon Size', iconSizeOptions, 'mediumSmall')
  );
  return (
    <FlatIconButton
      disabled={boolean('Disabled', false)}
      Icon={Icon}
      onClick={action('onClick')}
      tooltipText={text('Tooltip Text', 'tooltip text')}
    />
  );
};

defaultStory.story = { name: 'default' };
