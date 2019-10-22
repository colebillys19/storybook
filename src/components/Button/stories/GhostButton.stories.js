import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';

import GhostButton from '../GhostButton';

const label = 'LABEL TEXT';

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

storiesOf('Buttons|GhostButton', module)
  .addParameters({ component: GhostButton })
  .addDecorator(withKnobs)
  .add('default', () => {
    const icon = iconDictionary(
      select('Icon', iconOptions, iconDefault),
      select('Icon Size', sizeOptions, sizeDefault),
      'button'
    );
    return (
      <GhostButton
        disableFocusRipple
        disableRipple
        Icon={icon}
        label={text('Label Text', label)}
        onClick={action('onClickButton')}
      />
    );
  });
