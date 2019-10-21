import React from 'react';
import { storiesOf } from '@storybook/react';

import CurrencyInput from '../CurrencyInput';

storiesOf('Inputs|CurrencyInput', module)
  .add('default', () => (
    <CurrencyInput
      name="name"
      onChange={() => console.log('change')}
      value="5.00"
    />
  ));
