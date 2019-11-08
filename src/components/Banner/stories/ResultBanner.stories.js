import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ResultBanner from '../ResultBanner';
import ResultBannerDocs from '../docs/ResultBanner.docs.mdx';

const bannerProps = { errorMessage: 'error', successMessage: 'success' };

export default {
  decorators: [withKnobs],
  parameters: { component: ResultBanner, docs: { page: ResultBannerDocs } },
  title: 'Banners|ResultBanner',
};

export const errorStory = () => (
  <ResultBanner
    error={{ message: text('Error Message', bannerProps.errorMessage) }}
    onClose={action('onClose')}
  />
);

errorStory.story = { name: 'error' };

export const successStory = () => (
  <ResultBanner
    onClose={action('onClose')}
    success={{ message: text('Success Message', bannerProps.successMessage) }}
  />
);

successStory.story = { name: 'success' };
