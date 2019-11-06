import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import AlertBanner from '../AlertBanner';
import AlertBannerDocs from '../docs/AlertBanner.docs.mdx';

const bannerProps = {
  alertText: 'alert text',
  buttonText: 'button text',
};

export default {
  decorators: [withKnobs],
  parameters: { component: AlertBanner, docs: { page: AlertBannerDocs } },
  title: 'Banners|AlertBanner',
};

export const defaultStory = () => (
  <AlertBanner
    alertText={text('Alert Text', bannerProps.alertText)}
  />
);

defaultStory.story = { name: 'default' };

export const buttonStory = () => (
  <AlertBanner
    alertText={text('Alert Text', bannerProps.alertText)}
    buttonText={text('Button Text', bannerProps.buttonText)}
    onClick={action('onClick')}
  />
);

buttonStory.story = { name: 'with button' };
