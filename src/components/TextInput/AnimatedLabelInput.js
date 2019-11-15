import React from 'react';
import T from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import { StyledTextField } from './styles/AnimatedLabelInput.styles';

const AnimatedLabelInput = ({ Icon, ...props }) => {
  const startAdornment = Icon ? (
    <InputAdornment position="start">
      <Icon />
    </InputAdornment>
  ) : null;
  return (
    <StyledTextField
      animated
      InputProps={{ startAdornment }}
      margin="none"
      variant="outlined"
      {...props}
    />
  );
};

AnimatedLabelInput.propTypes = {
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

AnimatedLabelInput.defaultProps = {
  autoComplete: false,
  autoFocus: false,
  disabled: false,
  error: false,
  fullwidth: false,
  multiline: false,
  readOnly: false,
  required: false,
};

export default AnimatedLabelInput;

/*

In order for the text field to be accessible,
the input should be linked to the label and the helper text.
The underlying DOM nodes should have this structure.

<div class="form-control">
  <label for="my-input">Email address</label>
  <input id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">We'll never share your email.</span>
</div>

*/
