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
import { boolean, withKnobs } from '@storybook/addon-knobs';

import CustomTooltipIcon from '../CustomTooltipIcon';

import iconDictionary from '../../../utils/iconDictionary';

const containerStyles = {
  alignItems: 'center',
  display: 'flex',
  padding: '1rem 1.5rem',
};
const divStyles = {
  border: '2px solid black',
  borderRadius: '0.5rem',
  display: 'inline-block',
  fontWeight: 'bold',
  marginLeft: '1rem',
  padding: '0.5rem 1rem',
  textAlign: 'center',
};
const tooltipContent = (
  <div style={containerStyles}>
    {iconDictionary('imagePlaceholder', 'medium')}
    <div style={divStyles}>some custom content here</div>
  </div>
);

export default {
  decorators: [withKnobs],
  parameters: { component: CustomTooltipIcon },
  title: 'Icons|CustomTooltipIcon',
};

export const defaultStory = () => (
  <CustomTooltipIcon
    Icon={iconDictionary('inbox', 'medium')}
    interactiveTooltip={boolean('Interactive Tooltip', false)}
    TooltipContent={tooltipContent}
  />
);

defaultStory.story = { name: 'default' };
