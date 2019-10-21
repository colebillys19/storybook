import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from '../TextInput';

storiesOf('Inputs|TextInput', module)
  .add('default', () => (
    <TextInput
      onChange={() => console.log('change')}
    />
  ));
