import React from 'react';

import { checkBasicRendering, checkRequiredProps } from 'utils/testingHelpers';
import { AlertBanner } from '../index';

describe('<AlertBanner />', () => {
  const component = <AlertBanner alertText={'Help Im some Text'} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
