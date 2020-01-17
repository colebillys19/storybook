import React, { useState } from 'react';
import T from 'prop-types';

import BaseTextInput from './BaseTextInput';
import { msDarkGrey, passwordVisibilityHoverGrey } from '../../utils/defaultStyleHelper';
import { PASSWORD_BUTTON_POSITION_ERROR } from './constants';

const PasswordInput = ({
  buttonPosition,
  defaultValue,
  iconAdornment,
  InputProps,
  inputProps,
  placeholder,
  searchValues,
  textAdornment,
  type,
  ...props
}) => {
  // destructured props that aren't used is intentional
  // (BaseTextInput props that shouldn't be changed)

  const [visibility, toggleVisibility] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    toggleVisibility(!visibility);
  };

  if (buttonPosition !== 'start' && buttonPosition !== 'end') {
    throw new Error(PASSWORD_BUTTON_POSITION_ERROR);
  }

  const adornment = {
    color: msDarkGrey,
    hoverColor: passwordVisibilityHoverGrey,
    iconName: visibility ? 'visibility' : 'visibilityOff',
    onClick: handleClick,
    position: buttonPosition,
  };

  return (
    <BaseTextInput
      autoComplete="off"
      iconAdornment={adornment}
      inputProps={{ ...inputProps, type: visibility ? 'text' : 'password' }}
      {...props}
    />
  );
};

PasswordInput.propTypes = {
  /** If PasswordInput has an associated helper text element, pass a string that matches that
   * element's 'id' attribute.
   */
  ariaDescribedBy: T.string,

  /** If true, the input element will be focused on mount. */
  autoFocus: T.bool,

  /** Position of the visibility button. */
  buttonPosition: T.oneOf(['start', 'end']),

  /** Override or extend the styles applied to the component. See CSS API below for more details. */
  classes: T.object,

  /** The color of the input border on focus. */
  color: T.string,

  /** If true, the input element will be disabled. */
  disabled: T.bool,

  /** If true, the input will indicate an error. */
  error: T.bool,

  /** The id of the input element. Ensure the input label's 'for' attribute has a matching value. */
  id: T.string.isRequired,

  /** Attributes applied to the html input element. */
  inputProps: T.object,

  /** Pass a ref to the input element. */
  inputRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),

  /** Name attribute of the input element. Used to reference form data after a form is
   * submitted.
   */
  name: T.string,

  /** Callback fired when the value is changed. */
  onChange: T.func,

  /** If true, the input element will be required. */
  required: T.bool,

  /** The value of the input element, required for a controlled component. */
  value: T.any,
};

PasswordInput.defaultProps = {
  autoFocus: false,
  buttonPosition: 'end',
  disabled: false,
  error: false,
  required: false,
};

export default PasswordInput;
