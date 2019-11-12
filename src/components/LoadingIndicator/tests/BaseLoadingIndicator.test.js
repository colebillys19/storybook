import React from 'react';

import BaseLoadingIndicator from '../BaseLoadingIndicator';
import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

describe('<BaseLoadingIndicator />', () => {
  const component = <BaseLoadingIndicator />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
