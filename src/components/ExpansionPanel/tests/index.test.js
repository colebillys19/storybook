import React from 'react';

import {
  checkRequiredProps,
  checkBasicRendering,
} from 'utils/testingHelpers';
import Accordion from '../index';

describe('<Accordion />', () => {
  const propsToPassDown = {
    component: jest.fn(),
    handleClick: jest.fn(),
    mappable: [],
  };

  const component = <Accordion {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
