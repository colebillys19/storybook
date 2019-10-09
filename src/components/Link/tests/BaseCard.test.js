import React from 'react';

import BaseCard from '../BaseCard';
import {
  checkRequiredProps,
  checkBasicRendering,
} from '../../../shared/testingHelpers';

describe('<BaseCard />', () => {
  const propsToPassDown = {};
  const component = <BaseCard {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
