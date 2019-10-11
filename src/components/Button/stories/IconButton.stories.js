import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import iconDictionary from '../../../shared/iconDictionary';

import IconButton from '../IconButton';

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

storiesOf('Buttons|IconButton', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <IconButton onClick={action('onClickButton')}>
      {iconDictionary(
        select('Icon', iconOptions, iconDefault),
        select('Icon Size', sizeOptions, sizeDefault),
      )}
    </IconButton>
  ))
  .add('disabled', () => (
    <IconButton disabled onClick={action('onClickButton')}>
      {iconDictionary(
        select('Icon', iconOptions, iconDefault),
        select('Icon Size', sizeOptions, sizeDefault),
      )}
    </IconButton>
  ));
