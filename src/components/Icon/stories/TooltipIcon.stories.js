/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import TooltipIcon from '../TooltipIcon';

import iconDictionary from '../../../utils/iconDictionary';

const icon = iconDictionary('star', 'medium', 'button');
const contentDivStyles = {
  border: '0.1rem solid #000',
  borderRadius: '2rem',
  padding: '0.5rem',
  textAlign: 'center',
  width: '6rem',
};
const tooltipContent = (
  <div style={{ margin: '0.5rem' }}>
    <div style={contentDivStyles}>some</div>
    <div style={contentDivStyles}>content</div>
    <div style={contentDivStyles}>here</div>
  </div>
);

storiesOf('Icons|TooltipIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TooltipIcon
      Icon={icon}
      TooltipContent={<span>{text('Tooltip Text', 'tooltip text')}</span>}
    />
  ))
  .add('content', () => (
    <TooltipIcon
      Icon={icon}
      TooltipContent={tooltipContent}
    />
  ));
