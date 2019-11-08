import React from 'react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import ListItem from '../ListItem';

describe('<BaseListItem />', () => {
  const component = <ListItem text="List Item" />;

  checkBasicRendering(component);
  checkRequiredProps(component);
});
