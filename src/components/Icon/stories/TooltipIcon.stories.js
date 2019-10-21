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
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import TooltipIcon from '../TooltipIcon';

import iconDictionary from '../../../utils/iconDictionary';

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

const divStyles = {
  border: '2px solid blue',
  borderRadius: '0.5rem',
  margin: '0.5rem',
  padding: '0.5rem 1rem',
  textAlign: 'center',
};
const tooltipContent = (
  <div style={{ padding: '0.5rem' }}>
    <div style={divStyles}>some</div>
    <div style={divStyles}>content</div>
    <div style={divStyles}>here</div>
  </div>
);

storiesOf('Icons|TooltipIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const icon = iconDictionary(
      select('Icon', iconOptions, iconDefault),
      select('Icon Size', sizeOptions, sizeDefault),
      'button'
    );
    return (
      <TooltipIcon
        Icon={icon}
        TooltipContent={<span style={spanStyles}>{text('Tooltip Text', 'tooltip text')}</span>}
      />
    );
  })
  .add('content', () => {
    const icon = iconDictionary(
      select('Icon', iconOptions, iconDefault),
      select('Icon Size', sizeOptions, sizeDefault),
      'button'
    );
    return (
      <TooltipIcon
        Icon={icon}
        TooltipContent={tooltipContent}
      />
    );
  });

const spanStyles = { color: '#888', display: 'inline-block', margin: '0.3rem 0.8rem' };
