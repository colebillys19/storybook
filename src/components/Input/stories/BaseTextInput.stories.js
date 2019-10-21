/**
 * @description Wraps text to create an <h1> header
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import BaseTextInput from '../BaseTextInput';

storiesOf('Inputs|BaseTextInput', module)
  .add('default', () => (
    <BaseTextInput
      onChange={console.log('change')}
    />
  ));
