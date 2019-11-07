import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import AlertBanner from '../AlertBanner';
import AlertBannerDocs from '../docs/AlertBanner.docs.mdx';

export default {
  decorators: [withKnobs],
  parameters: { component: AlertBanner, docs: { page: AlertBannerDocs } },
  title: 'Banners|AlertBanner',
};

export const defaultStory = () => (
  <AlertBanner alertText={text('Alert Text', 'alert text')} />
);

defaultStory.story = { name: 'default' };

export const buttonStory = () => (
  <AlertBanner
    alertText={text('Alert Text', 'alert text')}
    buttonText={text('Button Text', 'button text')}
    onClick={action('onClick')}
  />
);

buttonStory.story = { name: 'with button' };
