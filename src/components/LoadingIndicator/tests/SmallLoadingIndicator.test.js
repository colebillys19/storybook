import React from 'react';

import SmallLoadingIndicator from '../SmallLoadingIndicator';
import { checkBasicRendering, checkRequiredProps } from '../../../utils/testingHelpers';

describe('<SmallLoadingIndicator />', () => {
  const component = <SmallLoadingIndicator />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
