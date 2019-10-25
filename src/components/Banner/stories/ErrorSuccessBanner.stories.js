import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ErrorSuccessBanner from 'components/Banner/ErrorSuccessBanner';

const bannerProps = { errorMessage: 'error', successMessage: 'success' };

export default {
  decorators: [withKnobs],
  parameters: { component: ErrorSuccessBanner },
  title: 'Banners|ErrorSuccessBanner',
};

export const errorStory = () => (
  <ErrorSuccessBanner
    error={{ message: text('Error Message', bannerProps.errorMessage) }}
    success={false}
  />
);

errorStory.story = { name: 'error' };

export const successStory = () => (
  <ErrorSuccessBanner
    error={false}
    success={{ message: text('Success Message', bannerProps.successMessage) }}
  />
);

successStory.story = { name: 'success' };
