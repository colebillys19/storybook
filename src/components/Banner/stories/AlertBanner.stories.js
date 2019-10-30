import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import AlertBanner from '../AlertBanner';

const bannerProps = {
  alertText: 'alert text',
  buttonText: 'button text',
};


export default {
  decorators: [withKnobs],
  parameters: { component: AlertBanner },
  title: 'Banners|AlertBanner',
};

export const defaultStory = () => (
  <AlertBanner
    alertText={text('Alert Text', bannerProps.alertText)}
    buttonText={text('Button Text', bannerProps.buttonText)}
    onClick={action('onClickButton')}
  />
);

defaultStory.story = { name: 'default' };
