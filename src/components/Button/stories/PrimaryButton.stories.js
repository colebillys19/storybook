import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import PrimaryButton from '../PrimaryButton';

const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';

storiesOf('Buttons|PrimaryButton', module)
  .add('default', () => (
    <PrimaryButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading
      onClick={action('onClickButton')}
    />
  ));
