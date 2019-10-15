import React from 'react';

import { LoadingIndicator } from '../index';
import { checkBasicRendering, checkRequiredProps } from '../../../utils/testingHelpers';

describe('<LoadingIndicator />', () => {
  const component = <LoadingIndicator />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
