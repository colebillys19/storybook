import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import AlertBanner from '../AlertBanner';

const bannerProps = {
  alertText: 'alert text',
  buttonText: 'button text',
};

storiesOf('Banners|AlertBanner', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <AlertBanner
      alertText={text('Alert Text', bannerProps.alertText)}
      buttonText={text('Button Text', bannerProps.buttonText)}
      onClick={action('onClickButton')}
    />
  ));
