/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoadingIndicator } from '../index';

storiesOf('Loading Indicators|LoadingIndicator', module)
  .addParameters({ component: LoadingIndicator })
  .add('default', () => <LoadingIndicator />);
