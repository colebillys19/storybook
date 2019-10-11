import React from 'react';

import { checkBasicRendering } from '../../../shared/testingHelpers';
import BasePaper from '../BasePaper';

describe('<BasePaper />', () => {
  const propsToPassDown = {};

  const component = <BasePaper {...propsToPassDown} />;
  checkBasicRendering(component);
});
