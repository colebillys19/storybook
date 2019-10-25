import React from 'react';

import TextInput from '../TextInput';
import {
  checkBasicRendering,
  checkRequiredProps,
} from 'utils/testingHelpers';

describe('<TextInput />', () => {
  const onChange = jest.fn();
  const component = (
    <TextInput
      onChange={onChange}
    />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);
});
