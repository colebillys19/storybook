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
import { text, withKnobs } from '@storybook/addon-knobs';

import TooltipIcon from '../TooltipIcon';

import iconDictionary from '../../../utils/iconDictionary';

export default {
  decorators: [withKnobs],
  parameters: { component: TooltipIcon },
  title: 'Icons|TooltipIcon',
};

export const defaultStory = () => (
  <TooltipIcon
    Icon={iconDictionary('inbox', 'medium')}
    tooltipText={text('Tooltip Text', 'tooltip text')}
  />
);

defaultStory.story = { name: 'default' };
