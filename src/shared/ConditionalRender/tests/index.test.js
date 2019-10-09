import React from 'react';

import { BaseTextInput } from 'components/base_ui/Inputs';
import ConditionalRender from '../index';
import { checkBasicRendering, checkRequiredProps } from '../../../../utils/testingHelpers';

describe('<ConditionalRender />', () => {
  const toRender = <BaseTextInput onChange={() => { }} />;
  const component = <ConditionalRender Component={toRender} shouldRender />;

  checkBasicRendering(component);
  checkRequiredProps(component);
});
