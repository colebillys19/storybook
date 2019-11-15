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
  autoComplete: T.string,
  autoFocus: T.bool,
  classes: T.object,
  color: T.string,
  defaultValue: T.any,
  disabled: T.bool,
  error: T.bool,
  FormHelperTextProps: T.object,
  fullwidth: T.bool,
  helperText: T.node,
  id: T.string,
  InputLabelProps: T.object,
  InputProps: T.object,
  inputProps: T.object,
  inputRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  label: T.node,
  multiline: T.bool,
  name: T.string,
  onChange: T.func,
  placeholder: T.string,
  readOnly: T.bool,
  required: T.bool,
  rows: T.number,
  rowsMax: T.number,
  type: T.string,
  value: T.any,
};

BaseTextInput.defaultProps = {
  autoComplete: false,
  autoFocus: false,
  disabled: false,
  error: false,
  fullwidth: false,
  multiline: false,
  readOnly: false,
  required: false,
};

export default BaseTextInput;

/*

In order for the text field to be accessible,
the input should be linked to the label and the helper text.
The underlying DOM nodes should have this structure.

<div class="form-control">
  <label for="my-input">Email address</label>
  <input id="my-input" aria-describedby="my-helper-text" />
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
