import React from 'react';
import { storiesOf } from '@storybook/react';

import PhoneNumberInput from '../PhoneNumberInput';

storiesOf('Inputs|PhoneNumberInput', module)
  .add('default', () => (
    <PhoneNumberInput
      name="name"
      onChange={() => console.log('change')}
      value="value"
    />
  ));
