import React from 'react';

import InsetPaper from '../InsetPaper';
import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from '../../../utils/testingHelpers';

describe('<InsetPaper />', () => {
  const paperContent = <div>card content</div>;
  const component = <InsetPaper>{paperContent}</InsetPaper>;
  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, paperContent);
});
