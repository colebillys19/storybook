import React from 'react';

import TitleCard from '../TitleCard';
import { checkBasicRendering } from '../../../utils/testingHelpers';

describe('<TitleCard />', () => {
  const propsToPassDown = {};
  const component = <TitleCard {...propsToPassDown} />;
  checkBasicRendering(component);
});
