import React from 'react';
import { storiesOf } from '@storybook/react';

import NumberInput from '../NumberInput';

storiesOf('Inputs|NumberInput', module)
  .add('default', () => (
    <NumberInput
      onChange={() => console.log('change')}
    />
  ));
