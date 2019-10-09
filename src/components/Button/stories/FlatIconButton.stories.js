import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import FlatIconButton from '../FlatIconButton';

const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';
const tooltipText = 'tooltip text';

storiesOf('Buttons|FlatIconButton', module)
  .add('default', () => (
    <FlatIconButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading
      onClick={action('onClickButton')}
      tooltipText={tooltipText}
    />
  ));
