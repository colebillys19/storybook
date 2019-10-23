import React from 'react';

import BasePaper from '../BasePaper';
import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from 'utils/testingHelpers';

describe('<BasePaper />', () => {
  const paperContent = <div>card content</div>;
  const component = <BasePaper>{paperContent}</BasePaper>;
  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, paperContent);
});
