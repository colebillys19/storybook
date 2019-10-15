import React from 'react';
// import { shallow } from 'enzyme';

import LoadingIndicator, { SmallLoadingIndicator } from '../index';
import { checkBasicRendering, checkRequiredProps } from '../../../shared/testingHelpers';

describe('<LoadingIndicator />', () => {
  const component = <LoadingIndicator />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});

describe('<LoadingIndicator />', () => {
  const component = <SmallLoadingIndicator />;
  checkBasicRendering(component);
  checkRequiredProps(component);
});
