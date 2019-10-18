import React from 'react';

import { TextField } from '../index';
import {
  checkBasicRendering,
  checkEventHandler,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

describe('<TextField />', () => {
  const changeHandler = jest.fn();
  const component = <TextField onChange={changeHandler} />;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkEventHandler(component, 'change', changeHandler);
});
