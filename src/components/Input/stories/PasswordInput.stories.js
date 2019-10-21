import React from 'react';
import { storiesOf } from '@storybook/react';

import PasswordInput from '../PasswordInput';

storiesOf('Inputs|PasswordInput', module)
  .add('default', () => (
    <PasswordInput
      onChange={() => console.log('change')}
    />
  ));
