/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ErrorSuccessBanner from '../ErrorSuccessBanner';

const bannerProps = { errorMessage: 'error', successMessage: 'success' };

storiesOf('Banners|ErrorSuccessBanner', module)
  .addParameters({ component: ErrorSuccessBanner })
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
