import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import SpecialPrimaryButton from '../SpecialPrimaryButton';

const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';

storiesOf('Buttons|SpecialPrimaryButton', module)
  .add('default', () => (
    <SpecialPrimaryButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading
      onClick={action('onClickButton')}
    />
  ));
