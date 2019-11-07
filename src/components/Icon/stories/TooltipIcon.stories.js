/**
 * @description
 * - icon that displays a tooltip on hover
 * @props
 * > Icon (function | element)
 *   - icon to be displayed, generated via icon dictionary
 * > iconProps (object)
 *   - icon props
 * > placement (string)
 *   - placement of tooltip:
 *     top-start, top, top-end, right-start, right, right-end
 *     bottom-start, bottom, bottom-end, left-start, left, left-end
 * > TooltipContent (element | node)
 *   - markup passed and displayed within tooltip
 */

import React from 'react';
import { text, select, withKnobs } from '@storybook/addon-knobs';

import TooltipIcon from '../TooltipIcon';

import iconDictionary from '../../../utils/iconDictionary';

export default {
  decorators: [withKnobs],
  parameters: { component: TooltipIcon },
  title: 'Icons|TooltipIcon',
};

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

const tooltipText = 'tooltip text';

export const defaultStory = () => {
  const Icon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Icon Size', sizeOptions, sizeDefault),
  );
  return (
    <TooltipIcon
      Icon={Icon}
      tooltipText={text('Tooltip Text', tooltipText)}
    />
  );
};

defaultStory.story = { name: 'default' };
