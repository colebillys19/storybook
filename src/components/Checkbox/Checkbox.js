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
   * If true, the switch will be disabled.
   */
  disabled: T.bool,
  /**
   * Callback fired when the state is changed.
   */
  onChange: T.func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default CheckboxTemplate;
