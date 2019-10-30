import React from 'react';

import LoadingIndicatorSmall from '../LoadingIndicatorSmall';
import { checkBasicRendering, checkRequiredProps } from '../../../utils/testingHelpers';

describe('<LoadingIndicatorSmall />', () => {
  const component = <LoadingIndicatorSmall />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
