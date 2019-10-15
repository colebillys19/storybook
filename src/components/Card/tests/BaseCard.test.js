import React from 'react';

import BaseCard from '../BaseCard';
import { checkBasicRendering } from '../../../shared/testingHelpers';

describe('<BaseCard />', () => {
  const propsToPassDown = {};
  const component = <BaseCard {...propsToPassDown} />;
  checkBasicRendering(component);
});
