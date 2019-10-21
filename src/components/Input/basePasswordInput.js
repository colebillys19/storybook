/**
 *
 * BasePasswordInput
 * @description: Base Password Input. Inputs will default to showing
 *               masked passwords. The input also includes a show password toggle
 *               that will reveal the input values.
 * API USAGE: {
 *    disabled [bool]: Boolean to disable the input field. Defaults to false
 *    label [string]: Input field label. This label will be located right above the input field
 *    onChange [function]: On change function
 *    required [bool]: If the field is required
 *    value [string]: Input field value
 * }
 */

import React from 'react';
import T from 'prop-types';
import { useToggle } from 'utils/globalHooks';
import ShowPasswordIcon from './showPasswordIcon';
import TextInputWithAdornment from './textInputWithAdornment';

export const BasePasswordInput = (props) => {
  const [showPassword, handleShowToggle] = useToggle(false);
  const fieldType = showPassword ? 'text' : 'password';
  const PasswordIcon = (
    <ShowPasswordIcon
      handleClick={handleShowToggle}
      showPassword={showPassword}
    />
  );
  return (
    <TextInputWithAdornment
      adornmentComponent={PasswordIcon}
      position="end"
      type={fieldType}
      {...props}
    />
  );
};

BasePasswordInput.defaultProps = { disabled: false };

BasePasswordInput.propTypes = {
  disabled: T.bool,
  label: T.string,
  onChange: T.func.isRequired,
  required: T.bool,
  value: T.oneOfType([T.string, T.number, T.bool]),
};

export default BasePasswordInput;
