import React from 'react';

import BaseCard from '../BaseCard';
import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from 'utils/testingHelpers';

describe('<BaseCard />', () => {
  const cardContent = <div>card content</div>;
  const component = <BaseCard>{cardContent}</BaseCard>;
  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, cardContent);
});
