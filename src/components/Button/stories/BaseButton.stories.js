import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import BaseButton from '../BaseButton';

const Icon = iconDictionary('home', 'mediumSmall', 'header');
const label = 'label text';

storiesOf('Buttons|BaseButton', module)
  .add('default', () => (
    <BaseButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading
      onClick={action('onClickButton')}
    />
  ));
