import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import RoundIconButton from '../RoundIconButton';
import RoundIconButtonDocs from '../docs/RoundIconButton.docs.mdx';
import iconDictionary from '../../../utils/iconDictionary';
import { iconOptions, iconSizeOptions } from '../../../utils/storyConstants';

export default {
  decorators: [withKnobs],
  parameters: {
    component: RoundIconButton,
    docs: { page: RoundIconButtonDocs },
  },
  title: 'Buttons|RoundIconButton',
};

export const defaultStory = () => {
  const Icon = iconDictionary(
    select('Icon', iconOptions, 'inbox'),
    select('Icon Size', iconSizeOptions, 'mediumSmall')
  );
  return (
    <RoundIconButton
      disabled={boolean('Disabled', false)}
      Icon={Icon}
      onClick={action('onClick')}
      tooltipText={text('Tooltip Text', 'tooltip text')}
    />
  );
};

defaultStory.story = { name: 'default' };
