import React from 'react';

import { checkBasicRendering, checkRequiredProps } from 'utils/testingHelpers';
import { ErrorBanner } from '../index';

describe('<ErrorBanner />', () => {
  const component = <ErrorBanner error={{ message: 'Help Im some Text' }} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
