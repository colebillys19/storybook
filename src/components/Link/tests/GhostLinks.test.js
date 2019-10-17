import React from 'react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import { GhostButtonLink } from '../index';

describe('<GhostButtonLink />', () => {
  const propsToPassDown = {
    label: 'Base Link Label',
    path: '/testingUrl',
  };

  const component = <GhostButtonLink {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
