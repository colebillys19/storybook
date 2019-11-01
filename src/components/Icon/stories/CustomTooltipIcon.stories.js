import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import CustomTooltipIcon from '../CustomTooltipIcon';

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
    {iconDictionary('image', 'medium')}
    <div style={divStyles}>some custom content here</div>
  </div>
);

export default {
  decorators: [withKnobs],
  parameters: { component: CustomTooltipIcon },
  title: 'Icons|CustomTooltipIcon',
};

export const defaultStory = () => {
  const icon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Icon Size', sizeOptions, sizeDefault),
  );
  return (
    <CustomTooltipIcon
      Icon={icon}
      interactiveTooltip={boolean('Interactive Tooltip', false)}
      TooltipContent={tooltipContent}
    />
  );
};

defaultStory.story = { name: 'default' };
