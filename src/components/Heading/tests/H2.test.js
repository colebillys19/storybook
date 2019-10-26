import React from 'react';

import H2 from '../H2';

import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from '../../../utils/testingHelpers';

describe('<H2 />', () => {
  const component = <H2>H2 Component</H2>;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, 'H2 Component');
});
