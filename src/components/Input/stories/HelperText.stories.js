import React from 'react';
import { storiesOf } from '@storybook/react';

import HelperText from '../HelperText';

storiesOf('Inputs|HelperText', module)
  .add('default', () => (
    <HelperText helperText="helper text" />
  ));
