import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorSuccessBanner from '../ErrorSuccessBanner';

const error = { message: 'error' };
const success = { message: 'success' };

storiesOf('Banners|ErrorSuccessBanner', module)
  .add('error', () => <ErrorSuccessBanner error={error} success={false} />)
  .add('success', () => <ErrorSuccessBanner error={false} success={success} />);
