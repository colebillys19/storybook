import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ErrorSuccessBanner from '../ErrorSuccessBanner';

const bannerProps = { errorMessage: 'error', successMessage: 'success' };

storiesOf('Banners|ErrorSuccessBanner', module)
  .addDecorator(withKnobs)
  .add('error', () => (
    <ErrorSuccessBanner
      error={{ message: text('Error Message', bannerProps.errorMessage) }}
      success={false}
    />
  ))
  .add('success', () => (
    <ErrorSuccessBanner
      error={false}
      success={{ message: text('Success Message', bannerProps.successMessage) }}
    />
  ));
