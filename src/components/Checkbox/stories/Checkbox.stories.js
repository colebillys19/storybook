/**
 * @description Create an icon that displays when an option is selected
 * @props
 * @checked (boolean) If true, the component is checked
 * @disabled (boolean) If true, the component is disabled
 * @onChange (function) Callback fired when the state is changed
 * You can access the new checked state by accessing even.target.checked(boolean)
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';

import { Checkbox } from '../index';

const defaultFalse = false;
const initialValue = 'value';

const defaultColor = 'default';
const colorOptions = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
};

storiesOf('Checkbox|Checkbox', module)
  .addParameters({ component: Checkbox })
  .addDecorator(withKnobs)
  .add('default', () => (
    <Checkbox
      checked
      color={select('Colors', colorOptions, defaultColor)}
      indeterminate={boolean('Indeterminate', defaultFalse)}
      onClick={action('onClickButton')}
      value={initialValue}
    />
  ))
  .add('unchecked', () => (
    <Checkbox
      disableRipple={boolean('Disable Ripple', defaultFalse)}
      indeterminate={boolean('Indeterminate', defaultFalse)}
      onClick={action('onClickButton')}
      value={initialValue}
    />
  ))
  .add('disabled', () => (
    <Checkbox
      disabled
      indeterminate={boolean('Indeterminate', defaultFalse)}
      onClick={action('onClickButton')}
      value={initialValue}
    />
  ));
