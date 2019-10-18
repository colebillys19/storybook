/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { SmallLoadingIndicator } from '../index';

storiesOf('Loading Indicators|SmallLoadingIndicator', module)
  .addParameters({ component: SmallLoadingIndicator })
  .add('default', () => <SmallLoadingIndicator />);
