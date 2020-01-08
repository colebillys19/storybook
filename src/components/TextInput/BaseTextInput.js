import React from 'react';
import T from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import { StyledInput } from './styles/BaseTextInput.styles';

const BaseTextInput = ({ color, Icon, ...props }) => {
  const startAdornment = Icon ? (
    <InputAdornment position="start">
      <Icon />
    </InputAdornment>
  ) : null;
  return (
    <StyledInput color={color} InputProps={{ startAdornment }} {...props} />
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
  fullwidth: T.bool,
  /** The id of the input element. Ensure the input label's 'for' attribute has a matching value. */
  id: T.string.isRequired,
  /** The component used for the input element. Either a string to use a DOM element or a
    * component.
    */
  inputComponent: T.elementType,
  /** Attributes applied to the input element. Ensure the 'aria-describedby' string matches the
    * helper text element's 'id' attribute.
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
  fullwidth: false,
  inputComponent: 'input',
  inputProps: {},
  multiline: false,
  readOnly: false,
  required: false,
  type: 'text',
};

export default BaseTextInput;

/*

In order for the text field to be accessible,
the input should be linked to the label and the helper text.
The underlying DOM nodes should have this structure.

<div class="form-control">
  <label for="my-input">Email address</label>
  <BaseTextInput id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">We'll never share your email.</span>
</div>

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

*/
