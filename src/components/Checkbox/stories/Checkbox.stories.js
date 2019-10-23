/**
 * @description Create an icon that displays when an option is selected.
 * @property checked: (bool) If true, the component is checked.
 * @property classes: (object) Override or extend the styles applied to the component.
 * @property color: ('primary' | 'secondary' | 'default') The color of the component.
 * @property checkIcon: (node) The icon to display when the component is checked.
 * @property disabled: (bool) If true, the component is disabled.
 * @property disableRipple: (bool) If true, the ripple effect will be disabled.
 * @property icon: (node) The icon to display when the component is unchecked.
 *                       Use the icon dictionary.
 * @property id: (string) The id of the input element.
 * @property indeterminate: (bool) [indeterminate=false] If true the component appears indeterminate.
 * @property indeterminateIcon: (node) The icon to display when the component is indeterminate.
 * @property InputProps: (object) Props applied to the input element.
 * @property inputRef: (ref) Pass a ref to the input element.
 * @property onChange: (function) Callback fired when the state is changed. You can access
 *                                the new checked state by accessing even.target.checked(boolean).
 * @property required: (bool) If true, the input element will be required.
 * @property type: (string) The input component prop type.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';

import Checkbox from '../Checkbox';

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
