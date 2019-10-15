import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../utils/iconDictionary';

import SecondaryButton from '../SecondaryButton';

const Icon = iconDictionary('inbox', 'mediumSmall', 'button');
const label = 'label text';

storiesOf('Buttons|SecondaryButton', module)
  .add('default', () => (
    <SecondaryButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      onClick={action('onClickButton')}
    />
  ));
