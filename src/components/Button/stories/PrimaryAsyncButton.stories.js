import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import PrimaryAsyncButton from '../PrimaryAsyncButton';

const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';

storiesOf('Buttons|PrimaryAsyncButton', module)
  .add('default', () => (
    <PrimaryAsyncButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading={false}
      onClick={action('onClickButton')}
    />
  ));
