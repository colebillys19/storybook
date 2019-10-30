/**
 *
 * BasePasswordInput
 * @description: Base Password Input. Inputs will default to showing
 *               masked passwords. The input also includes a show password toggle
 *               that will reveal the input values.
 * API USAGE: {
 *    disabled [bool]: Boolean to disable the input field. Defaults to false.
 *    label [string]: Input field label. This label will be located right above the input field.
 *    onChange [function]: On change function.
 *    required [bool]: If the field is required.
 *    value [string]: Input field value.
 * }
 */

import React from 'react';
import T from 'prop-types';

import useToggle from './helpers/useToggle';
import ShowPasswordIcon from './sub-components/ShowPasswordIcon';
import TextInputWithAdornment from './sub-components/TextInputWithAdornment';

/**
 * Use `PasswordInput` for inputs that contain sensitive information.
 */
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


BasePasswordInput.propTypes = {
  /**
   * Override or extend the styles applied to the component. 
   */
  classes: T.object,
  /**
   *  Boolean to disable the input field. Defaults to false.
   */
  disabled: T.bool,
  /**
   * Attributes applied to the input element.
   */
  InputProps: T.object,
  /**
   * Input field label. This label will be located right above the input field.
   */
  label: T.string,
  /**
   * The callback fired when an onBlur event is triggered.
   */
  onBlur: T.func,
  /**
   * The callback fired when an onChange event is triggered.
   */
  onChange: T.func.isRequired,
  /**
   * The placeholder text.
   */
  placeholder: T.string,
  /**
   * If true, the label is displayed as required and the input will be required.
   */
  required: T.bool,
  /**
   * The value of the Input element, required for a controlled component.
   */
  value: T.oneOfType([T.string, T.number, T.bool]),
  /**
   * The variant to use.
   */
  variant: T.oneOf(['filled', 'outlined', 'standard']),
};

BasePasswordInput.defaultProps = {
  disabled: false,
  required: false,
};


export default BasePasswordInput;
