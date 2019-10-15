import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoadingIndicator } from '../index';


storiesOf('Loading Indicators|LoadingIndicator', module)
  .add('default', () => (
    <LoadingIndicator />
  ));
