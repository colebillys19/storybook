import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ErrorSuccessBanner from '../ErrorSuccessBanner';
import ErrorSuccessBannerDocs from '../docs/ErrorSuccessBanner.docs.mdx';

const bannerProps = { errorMessage: 'error', successMessage: 'success' };

export default {
  decorators: [withKnobs],
  parameters: { component: ErrorSuccessBanner, docs: { page: ErrorSuccessBannerDocs } },
  title: 'Banners|ErrorSuccessBanner',
};

export const errorStory = () => (
  <ErrorSuccessBanner
    error={{ message: text('Error Message', bannerProps.errorMessage) }}
    onClose={action('onClose')}
  />
);

errorStory.story = { name: 'error' };

export const successStory = () => (
  <ErrorSuccessBanner
    onClose={action('onClose')}
    success={{ message: text('Success Message', bannerProps.successMessage) }}
  />
);

successStory.story = { name: 'success' };
