import React, { useState } from 'react';
import {
  cleanup,
  // fireEvent,
  // render,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import BaseDatePicker from '../BaseDatePicker';

afterEach(cleanup);

describe('<BaseDatePicker />', () => {
  const component = (
    <BaseDatePicker
      id="test-date-picker"
    />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);
});
