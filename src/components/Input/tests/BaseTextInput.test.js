import React from 'react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from 'utils/testingHelpers';
import BaseTextInput from '../baseTextInput';

describe('<BaseTextInput />', () => {
  const propsToPassDown = { onChange: jest.fn() };
  const component = <BaseTextInput {...propsToPassDown} />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
