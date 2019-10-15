import React from 'react';

import {
  H1,
  H2,
  H3,
} from '../index';

import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from '../../../utils/testingHelpers';

describe('<H1 />', () => {
  const component = <H1>H1 Component</H1>;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, 'H1 Component');
});

describe('<H2 />', () => {
  const component = <H2>H2 Component</H2>;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, 'H2 Component');
});

describe('<H3 />', () => {
  const component = <H3>H3 Component</H3>;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, 'H3 Component');
});
