import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AlertBanner from '../AlertBanner';

const alertText = 'alert text';
const buttonText = 'button text';

storiesOf('Banners|AlertBanner', module)
  .add('default', () => (
    <AlertBanner
      alertText={alertText}
      buttonText={buttonText}
      onClick={action('onClickButton')}
    />
  ));
