import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import NotificationBanner from '../NotificationBanner';
import NotificationBannerDocs from '../docs/NotificationBanner.docs.mdx';

export default {
  decorators: [withKnobs],
  parameters: { component: NotificationBanner, docs: { page: NotificationBannerDocs } },
  title: 'Banners|NotificationBanner',
};

export const defaultStory = () => (
  <NotificationBanner
    alert={boolean('Alert', false)}
    messageText={text('Message Text', 'message text')}
  />
);

defaultStory.story = { name: 'default' };

export const buttonStory = () => (
  <NotificationBanner
    alert={boolean('Alert', false)}
    buttonText={text('Button Text', 'button text')}
    messageText={text('Message Text', 'message text')}
    onClick={action('onClick')}
  />
);

buttonStory.story = { name: 'with button' };
