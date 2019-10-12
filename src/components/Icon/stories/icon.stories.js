import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
} from '@storybook/addon-knobs/react';

import iconDictionary from '../../../shared/iconDictionary';

import TooltipIcon from '../TooltipIcon';


const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'star';

const sizeOptions = {
  large: 'large',
  medium: 'medium',
  mediumLarge: 'mediumLarge',
  mediumSmall: 'mediumSmall',
  small: 'small',
  xSmall: 'xSmall',
};

const cancelIcon = iconDictionary('cancel', 'mediumSmall');

const sizeDefault = 'mediumSmall';

storiesOf('Icons|TooltipIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TooltipIcon
      aria-label="cancel"
      Icon={cancelIcon}
      Tooptip="cancel"
    >

    </TooltipIcon>
  ));
