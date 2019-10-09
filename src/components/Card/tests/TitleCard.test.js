import React from 'react';

import TitleCard from '../TitleCard';
import {
  checkRequiredProps,
  checkBasicRendering,
} from '../../../shared/testingHelpers';

describe('<TitleCard />', () => {
  const propsToPassDown = {};
  const component = <TitleCard {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
