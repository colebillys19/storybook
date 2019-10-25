import React from 'react';

import { H3 } from '../index';

import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from 'utils/testingHelpers';

describe('<H3 />', () => {
  const component = <H3>H3 Component</H3>;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, 'H3 Component');
});
