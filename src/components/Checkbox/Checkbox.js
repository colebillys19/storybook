/**
*
* Checkbox
* @description: Create an icon that displays when an option is selected
* Use Case: When a list of options can contain multiple selected values
* Parent Components/Containers: [
*   {
*     route: <route>,
*     name: <Component/Container name>,
*   },
* ]
*/

import React from 'react';
import T from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

/**
 * Use `Checkbox` to select one or more items from a set.
 */
const CheckboxTemplate = ({
  checked,
  disabled,
  onChange,
  ...restProps
}) => (
  <Checkbox
    checked={checked}
    disabled={disabled}
    onChange={onChange}
    {...restProps}
  />
);

CheckboxTemplate.propTypes = {
  /**
   * If true, the component is checked.
   */
  checked: T.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkIcon: T.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * The color of the component.
   */
  color: T.oneOf(['primary', 'secondary', 'default']),
  /**
   * If true, the switch will be disabled.
   */
  disabled: T.bool,
  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple: T.bool,
  /**
   * The icon to display when the component is unchecked.
   * Use the icon dictionary.
   */
  icon: T.node,
  /**
   * The id of the input element.
   */
  id: T.string,
  /**
   * If true the component appears indeterminate.
   */
  indeterminate: T.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: T.node,
  /**
   * Props applied to the input element.
   */
  InputProps: T.object,
  /**
   * The ref passed to the input element.
   */
  inputRef: T.oneOfType([
    T.func,
    T.shape({ current: T.any }),
  ]),
  /**
   * Callback fired when the state is changed.
   */
  onChange: T.func,
  /**
   * If true, the input element will be required.
   */
  required: T.bool,
  /**
   * The input component prop type.
   */
  type: T.string,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
};

export default CheckboxTemplate;
