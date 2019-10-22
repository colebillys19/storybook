/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import AlertBanner from '../AlertBanner';

const bannerProps = {
  alertText: 'alert text',
  buttonText: 'button text',
};

storiesOf('Banners|AlertBanner', module)
  .addParameters({ component: AlertBanner })
  .addDecorator(withKnobs)
  .add('default', () => (
    <AlertBanner
      alertText={text('Alert Text', bannerProps.alertText)}
      buttonText={text('Button Text', bannerProps.buttonText)}
      onClick={action('onClickButton')}
    />
  ));
