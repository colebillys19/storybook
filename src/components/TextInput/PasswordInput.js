import React, { useState } from 'react';
import T from 'prop-types';

import BaseTextInput from './BaseTextInput';
import { msDarkGrey, passwordVisibilityHoverGrey } from '../../utils/defaultStyleHelper';
import { PASSWORD_BUTTON_POSITION_ERROR } from './constants';

const PasswordInput = ({
  buttonPosition,
  iconAdornment,
  inputProps,
  noButton,
  textAdornment,
  ...props
}) => {
  // destructured props that aren't used is intentional (props that shouldn't be changed)

  const [visibility, toggleVisibility] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleVisibility(!visibility);
  };

  if (buttonPosition !== 'start' && buttonPosition !== 'end') {
    throw new Error(PASSWORD_BUTTON_POSITION_ERROR);
  }

  const passwordAdornment = noButton ? null : {
    color: msDarkGrey,
    hoverColor: passwordVisibilityHoverGrey,
    iconName: visibility ? 'visibility' : 'visibilityOff',
    onClick: handleClick,
    position: buttonPosition,
  };

  return (
    <BaseTextInput
      {...props}
      autoComplete="off"
      iconAdornment={iconAdornment && noButton ? iconAdornment : passwordAdornment}
      inputProps={{ ...inputProps, type: visibility ? 'text' : 'password' }}
      textAdornment={textAdornment && noButton ? textAdornment : null}
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

  /** Object detailing icon to be displayed as adornment. If onClick is provided, an icon button
   * will be rendered. Note that for PasswordInput, the 'noButton' prop must be passed as true for
   * custom adornments to be rendered.
   */
  iconAdornment: T.shape({
    color: T.string,
    hoverColor: T.string,
    iconName: T.string,
    onClick: T.func,
    position: T.string,
  }),

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

  /** If true, no visibility button will be displayed. */
  noButton: T.bool,

  /** Callback fired when the value is changed. */
  onChange: T.func,

  /** If true, the input element will be required. */
  required: T.bool,

  /** Object detailing text to be displayed as adornment. If onClick is provided, a text button
   * will be rendered. Ensure font/weight passed are available globally (font string
   * example: `'Montserrat', sans-serif`). Note that for PasswordInput, the 'noButton' prop must
   * be passed as true for custom adornments to be rendered.
   */
  textAdornment: T.shape({
    color: T.string,
    font: T.string,
    hoverColor: T.string,
    onClick: T.func,
    size: T.string,
    text: T.string,
    weight: T.string,
  }),

  /** The value of the input element, required for a controlled component. */
  value: T.any,
};

PasswordInput.defaultProps = {
  autoFocus: false,
  buttonPosition: 'end',
  disabled: false,
  error: false,
  noButton: false,
  required: false,
};

export default PasswordInput;
