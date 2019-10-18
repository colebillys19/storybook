/**
 * @description Circular, rotating loading indicator
 *              For when the client is waiting for async data to finish loading
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoadingIndicator } from '../index';

storiesOf('Loading Indicators|LoadingIndicator', module)
  .add('default', () => <LoadingIndicator />);
