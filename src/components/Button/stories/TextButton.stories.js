import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextButton from '../TextButton';

const label = 'label text';

storiesOf('Buttons|TextButton', module)
  .add('default', () => (
    <TextButton
      disableFocusRipple
      disableRipple
      label={label}
      onClick={action('onClickButton')}
    />
  ));
