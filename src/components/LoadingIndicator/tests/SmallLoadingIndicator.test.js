import React from 'react';

import { SmallLoadingIndicator } from '../index';
import { checkBasicRendering, checkRequiredProps } from '../../../utils/testingHelpers';

describe('<SmallLoadingIndicator />', () => {
  const component = <SmallLoadingIndicator />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
