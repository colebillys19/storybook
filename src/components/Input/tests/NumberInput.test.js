import React from 'react';

import NumberInput from '../NumberInput';
import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

describe('<NumberInput />', () => {
  const onChange = jest.fn();
  const component = <NumberInput onChange={onChange} />;

  checkBasicRendering(component);
  checkRequiredProps(component);
});
