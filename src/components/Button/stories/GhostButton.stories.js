import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import GhostButton from '../GhostButton';

const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';

storiesOf('Buttons|GhostButton', module)
  .add('default', () => (
    <GhostButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading
      onClick={action('onClickButton')}
    />
  ));
