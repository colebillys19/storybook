import React, { useState } from 'react';
import T from 'prop-types';

import BaseTextInput from './BaseTextInput';
import { StyledIconButton } from './styles/PasswordInput.styles';
import IconDictionary from '../../utils/IconDictionary';

const PasswordInput = ({
  adornmentPlacement,
  inputProps,
  ...props
}) => { // eslint-disable-line
  const [visibility, toggleVisibility] = useState(false);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const adornmentContent = (
    <StyledIconButton
      adornmentPlacement={adornmentPlacement}
      aria-label="toggle password visibility"
      onClick={() => toggleVisibility(!visibility)}
      onMouseDown={handleMouseDownPassword}
    >
      {visibility ? (
        IconDictionary('visibility', 'mediumSmall')
      ) : (
        IconDictionary('visibilityOff', 'mediumSmall')
      )}
    </StyledIconButton>
  );

  return (
    <BaseTextInput
      adornmentContent={adornmentContent}
      adornmentPlacement={adornmentPlacement}
      autoComplete="off"
      inputProps={{ type: visibility ? 'text' : 'password', ...inputProps }}
      isPassword
      {...props}
    />
  );
};

PasswordInput.propTypes = {
  /** */
  adornmentPlacement: T.oneOf(['start', 'end']),
  /** If true, the input element will be focused during the first mount. */
  autoFocus: T.bool,
  /** Override or extend the styles applied to the component. See CSS API below for more details. */
  classes: T.object,
  /** The CSS class name of the wrapper element. */
  className: T.string,
  /** The color of the input border on focus. */
  color: T.string,
  /** The default input element value. Use when the component is not controlled. */
  defaultValue: T.any,
  /** If true, the input element will be disabled. */
  disabled: T.bool,
  /** If true, the input will indicate an error. */
  error: T.bool,
  /** If true, the input will take up the full width of its container. */
  fullWidth: T.bool,
  /** The id of the input element. Ensure the input label's 'for' attribute has a matching value. */
  id: T.string.isRequired,
  /** Attributes applied to the input element. Ensure the 'aria-describedby' string matches the
    * helper text element's 'id' attribute.
    */
  inputProps: T.object,
  /** Pass a ref to the input element. */
  inputRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  /** Name attribute of the input element. */
  name: T.string,
  /** Callback fired when the input is blurred. Notice that the first argument (event) might be
    * undefined.
    */
  onBlur: T.func,
  /** Callback fired when the value is changed. */
  onChange: T.func,
  /** The short hint displayed in the input before the user enters a value. */
  placeholder: T.string,
  /** It prevents the user from changing the value of the field (not from interacting with the
    * field).
    */
  readOnly: T.bool,
  /** If true, the input element will be required. */
  required: T.bool,
  /** The value of the input element, required for a controlled component. */
  value: T.any,
};

PasswordInput.defaultProps = {
  adornmentPlacement: 'end',
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  inputProps: {},
  readOnly: false,
  required: false,
};

export default PasswordInput;
