import React from 'react';
import T from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import { StyledInput } from './styles/TextAreaInput.styles';

const TextAreaInput = ({
  Icon,
  ...props
}) => {
  const startAdornment = Icon ? (
    <InputAdornment position="start">
      <Icon />
    </InputAdornment>
  ) : null;
  return (
    <StyledInput
      multiline
      startAdornment={startAdornment}
      {...props}
    />
  );
};

TextAreaInput.propTypes = {
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
  /** Number of rows to display. */
  rows: T.oneOfType([T.string, T.number]),
  /** Maximum number of rows to display. */
  rowsMax: T.oneOfType([T.string, T.number]),
  /** Minimum number of rows to display. */
  rowsMin: T.oneOfType([T.string, T.number]),
  /** The value of the input element, required for a controlled component. */
  value: T.any,
};

TextAreaInput.defaultProps = {
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  inputProps: {},
  readOnly: false,
  required: false,
  rows: 5,
};

export default TextAreaInput;
