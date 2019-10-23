/**
 * @description Circular, rotating loading indicator.
 *              Smaller than the default Loading Indicator
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import SmallLoadingIndicator from '../SmallLoadingIndicator';

storiesOf('Loading Indicators|SmallLoadingIndicator', module)
  .addParameters({ component: SmallLoadingIndicator })
  .add('default', () => <SmallLoadingIndicator />);
