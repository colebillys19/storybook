import React from 'react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import { BaseListItem } from '../index';

describe('<BaseListItem />', () => {
  const component = (
    <BaseListItem text="List Item" />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);
});
