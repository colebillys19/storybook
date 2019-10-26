import React from 'react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import GhostButtonLink from '../GhostButtonLink';

describe('<GhostButtonLink />', () => {
  const propsToPassDown = {
    label: 'Base Link Label',
    path: '/testingUrl',
  };

  const component = <GhostButtonLink {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
