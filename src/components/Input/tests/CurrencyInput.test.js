import React from 'react';

import CurrencyInput from '../CurrencyInput';
import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

describe('<CurrencyInput />', () => {
  const onChange = jest.fn();
  const component = <CurrencyInput onChange={onChange} />;

  checkBasicRendering(component);
  checkRequiredProps(component);
});
