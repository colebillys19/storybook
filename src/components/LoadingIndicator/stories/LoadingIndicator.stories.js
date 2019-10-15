import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingIndicator, { SmallLoadingIndicator } from '../index';


storiesOf('Loaders|Indicators', module)
  .add('default', () => (
    <LoadingIndicator />
  ))
  .add('small', () => (
    <SmallLoadingIndicator />
  ));
