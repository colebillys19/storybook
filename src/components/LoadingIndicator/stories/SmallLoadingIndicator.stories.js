/**
 * @description Circular, rotating loading indicator.
 *              Smaller than the default Loading Indicator
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { SmallLoadingIndicator } from '../index';

storiesOf('Loading Indicators|SmallLoadingIndicator', module)
  .add('default', () => <SmallLoadingIndicator />);
