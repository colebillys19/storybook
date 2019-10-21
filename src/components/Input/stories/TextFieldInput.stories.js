import React from 'react';
import { storiesOf } from '@storybook/react';

import TextFieldInput from '../TextFieldInput';

storiesOf('Inputs|TextFieldInput', module)
  .add('default', () => (
    <TextFieldInput
      onChange={() => console.log('change')}
    />
  ));
