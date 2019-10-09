import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import GhostModalButton from '../GhostModalButton';

const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';

storiesOf('Buttons|GhostModalButton', module)
  .add('default', () => (
    <GhostModalButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading
      onClick={action('onClickButton')}
    />
  ));
