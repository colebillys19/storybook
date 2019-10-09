import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import BaseButton from '../BaseButton';

const enterDelay = 500;
const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';
const tooltipText = 'tooltip text';

storiesOf('Buttons|BaseButton', module)
  .add('default', () => (
    <BaseButton
      disableFocusRipple
      disableRipple
      enterDelay={enterDelay}
      Icon={Icon}
      label={label}
      loading
      onClick={action('onClickButton')}
      tooltipText={tooltipText}
    />
  ));
