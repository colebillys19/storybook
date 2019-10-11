import React from 'react';

import { checkBasicRendering } from '../../../shared/testingHelpers';
import InsetPaper from '../InsetPaper';

describe('<InsetPaper />', () => {
  const propsToPassDown = {};

  const component = <InsetPaper {...propsToPassDown} />;
  checkBasicRendering(component);
});
