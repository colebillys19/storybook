import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ErrorBanner from '../ErrorBanner';

const bannerProps = { errorMessage: 'error' };

storiesOf('Banners|ErrorBanner', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ErrorBanner error={{ message: text('Error Message', bannerProps.errorMessage) }} />
  ));
