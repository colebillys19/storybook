import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../utils/iconDictionary';

import BaseButton from '../BaseButton';

const Icon = iconDictionary('inbox', 'mediumSmall', 'button');
const label = 'label text';

storiesOf('Buttons|BaseButton', module)
  .add('default', () => (
    <BaseButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      onClick={action('onClickButton')}
    />
  ));
