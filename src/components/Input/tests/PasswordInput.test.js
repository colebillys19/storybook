import React from 'react';

import PasswordInput from '../PasswordInput';
import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

describe('<PasswordInput />', () => {
  const onChange = jest.fn();
  const component = (
    <PasswordInput
      onChange={onChange}
    />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);
});
