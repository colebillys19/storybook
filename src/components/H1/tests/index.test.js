import React from 'react';

import { H1 } from '../index';
import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from '../../../utils/testingHelpers';

describe('<H1 />', () => {
  const component = <H1>H1 Component</H1>;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, 'H1 Component');
});
