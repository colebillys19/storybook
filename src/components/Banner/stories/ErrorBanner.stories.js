import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorBanner from '../ErrorBanner';

const error = { message: 'error' };

storiesOf('Banners|ErrorBanner', module)
  .add('default', () => <ErrorBanner error={error} />);
