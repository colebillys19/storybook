import React from 'react';

import LoadingIndicatorNormal from '../LoadingIndicatorNormal';
import { checkBasicRendering, checkRequiredProps } from '../../../utils/testingHelpers';

describe('<LoadingIndicatorNormal />', () => {
  const component = <LoadingIndicatorNormal />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
