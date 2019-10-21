import React from 'react';
import { storiesOf } from '@storybook/react';

import NameInput from '../NameInput';

storiesOf('Inputs|NameInput', module)
  .add('default', () => (
    <NameInput
      name="name"
      onChange={() => console.log('change')}
      value="value"
    />
  ));
