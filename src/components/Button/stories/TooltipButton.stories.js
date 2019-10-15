import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';

import TooltipButton from '../TooltipButton';

const label = 'label text';
const tooltipText = 'tooltip text';

const enterDelayOptions = {
  '50ms': 50,
  '100ms': 100,
  '250ms': 200,
  '500ms': 500,
  '750ms': 750,
  '1000ms': 1000,
};
const enterDelayDefault = 100;

/* eslint-disable sort-keys */
const placementOptions = {
  'top-start': 'top-start',
  top: 'top',
  'top-end': 'top-end',
  'right-start': 'right-start',
  right: 'right',
  'right-end': 'right-end',
  'bottom-start': 'bottom-start',
  bottom: 'bottom',
  'bottom-end': 'bottom-end',
  'left-start': 'left-start',
  left: 'left',
  'left-end': 'left-end',
};
/* eslint-enable sort-keys */
const placementDefault = 'bottom';

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

storiesOf('Buttons|TooltipButton', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const icon = iconDictionary(
      select('Icon', iconOptions, iconDefault),
      select('Icon Size', sizeOptions, sizeDefault),
      'button'
    );
    return (
      <TooltipButton
        disableFocusRipple
        disableRipple
        enterDelay={select('Delay', enterDelayOptions, enterDelayDefault)}
        Icon={icon}
        label={text('Label Text', label)}
        onClick={action('onClickButton')}
        placement={select('Placement', placementOptions, placementDefault)}
        tooltipText={text('Tooltip Text', tooltipText)}
      />
    );
  });
