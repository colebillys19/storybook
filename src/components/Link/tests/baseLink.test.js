import React from 'react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from 'utils/testingHelpers';
import BaseLink from '../BaseLink';

describe('<BaseLink />', () => {
  const propsToPassDown = {
    label: 'Base Link Label',
    path: '/testingUrl',
  };

  const component = <BaseLink {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
