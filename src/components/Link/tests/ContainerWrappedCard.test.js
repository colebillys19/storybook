import React from 'react';

import ContainerWrappedCard from '../ContainerWrappedCard';
import {
  checkRequiredProps,
  checkBasicRendering,
} from '../../../shared/testingHelpers';

describe('<ContainerWrappedCard />', () => {
  const propsToPassDown = {};
  const component = <ContainerWrappedCard {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
