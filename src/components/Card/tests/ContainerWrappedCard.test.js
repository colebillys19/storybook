import React from 'react';

import ContainerWrappedCard from '../ContainerWrappedCard';
import { checkBasicRendering } from '../../../utils/testingHelpers';

describe('<ContainerWrappedCard />', () => {
  const propsToPassDown = {};
  const component = <ContainerWrappedCard {...propsToPassDown} />;
  checkBasicRendering(component);
});
