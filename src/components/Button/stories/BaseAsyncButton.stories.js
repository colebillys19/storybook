import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import BaseAsyncButton from '../BaseAsyncButton';

const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';

storiesOf('Buttons|BaseAsyncButton', module)
  .add('default', () => (
    <BaseAsyncButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading={false}
      onClick={action('onClickButton')}
    />
  ));
