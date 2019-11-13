import React from 'react';
import { text, select, withKnobs } from '@storybook/addon-knobs';

import BaseTooltipIconDocs from '../docs/BaseTooltipIcon.docs.mdx';
import BaseTooltipIcon from '../BaseTooltipIcon';
import iconDictionary from '../../../utils/iconDictionary';
import { iconOptions, iconSizeOptions } from '../../../utils/storyConstants';

export default {
  decorators: [withKnobs],
  parameters: { component: BaseTooltipIcon, docs: { page: BaseTooltipIconDocs } },
  title: 'Miscellaneous|BaseTooltipIcon',
};

export const defaultStory = () => {
  const Icon = iconDictionary(
    select('Icon', iconOptions, 'inbox'),
    select('Icon Size', iconSizeOptions, 'mediumLarge')
  );
  return (
    <BaseTooltipIcon Icon={Icon} tooltipText={text('Tooltip Text', 'tooltip text')} />
  );
};

defaultStory.story = { name: 'default' };
