import React from 'react';
import T from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import { StyledInput } from './styles/BaseTextInput.styles';

const BaseTextInput = ({
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
      startAdornment={startAdornment}
      {...props}
    />
  );
};

BaseTextInput.propTypes = {
  /** This prop helps users to fill forms faster, especially on mobile devices. The name can be
    * confusing, as it's more like an autofill.
    */
  autoComplete: T.string,
  /** If true, the input element will be focused during the first mount. */
  autoFocus: T.bool,
  /** Override or extend the styles applied to the component. See CSS API below for more details. */
  classes: T.object,
  /** The CSS class name of the wrapper element. */
  className: T.string,
  /** The color of the component. It supports those theme colors that make sense for this
    * component.
    */
  color: T.oneOf(['primary', 'secondary']),
  /** The default input element value. Use when the component is not controlled. */
  defaultValue: T.any,
  /** If true, the input element will be disabled. */
  disabled: T.bool,
  /** End InputAdornment for this component. */
  error: T.bool,
  /** If true, the input will indicate an error. This is normally obtained via context from
    * FormControl.
    */
  FormHelperTextProps: T.object,
  /** If true, the input will take up the full width of its container. */
  fullWidth: T.bool,
  /** The id of the input element. Ensure the input label's 'for' attribute has a matching value. */
  id: T.string.isRequired,
  /** The component used for the input element. Either a string to use a DOM element or a
    * component.
    */
  inputComponent: T.elementType,
  /** Attributes applied to the input element. Ensure the 'aria-describedby' string (required)
    * matches the helper text element's 'id' attribute.
    */
  inputProps: T.shape({ 'aria-describedby': T.string.isRequired }),
  /** Pass a ref to the input element. */
  inputRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  /** If dense, will adjust vertical spacing. This is normally obtained via context from
    * FormControl.
    */
  margin: T.oneOf(['dense', 'none']),
  /** If true, a textarea element will be rendered. */
  multiline: T.bool,
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
  /**  Number of rows to display when multiline option is set to true. */
  rows: T.oneOfType([T.string, T.number]),
  /** Maximum number of rows to display when multiline option is set to true. */
  rowsMax: T.oneOfType([T.string, T.number]),
  /** Minimum number of rows to display when multiline option is set to true. */
  rowsMin: T.oneOfType([T.string, T.number]),
  /** Type of the input element. It should be a valid HTML5 input type. */
  type: T.string,
  /** The value of the input element, required for a controlled component. */
  value: T.any,
};

BaseTextInput.defaultProps = {
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  inputComponent: 'input',
  inputProps: {},
  multiline: false,
  readOnly: false,
  required: false,
  type: 'text',
};

export default BaseTextInput;
