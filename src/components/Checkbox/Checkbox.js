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
  checked: T.bool,
  disabled: T.bool,
  onChange: T.func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default CheckboxTemplate;
