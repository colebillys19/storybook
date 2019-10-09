import React from 'react';

import {
  checkRequiredProps,
  checkBasicRendering,
} from 'utils/testingHelpers';
import Paper from '../index';

describe('<Paper />', () => {
  const propsToPassDown = {};

  const component = <Paper {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
