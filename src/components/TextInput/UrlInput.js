import React, { useState } from 'react';
import T from 'prop-types';
import { isURL } from 'validator';

import { StyledBaseTextInput } from './styles/UrlInput.styles';

const UrlInput = ({
  onChange,
  onInvalidInput,
  onValidInput,
  validatorOptions,
  ...props
}) => {
  const [isValid, toggleValidity] = useState(true);

  const validateInput = (e) => {
    if (e.target.value && !isURL(e.target.value, validatorOptions) && isValid) {
      onInvalidInput();
      toggleValidity(false);
    } else if (e.target.value && isURL(e.target.value, validatorOptions) && !isValid) {
      onValidInput();
      toggleValidity(true);
    }
  };

  const onChangeToPass = (e) => {
    validateInput(e);
    onChange(e);
  };

  return (
    <StyledBaseTextInput
      InputProps={{ onChange: onChangeToPass }}
      {...props}
    />
  );
};

UrlInput.propTypes = {
  /** If BaseTextInput has an associated helper text element, pass a string that matches that
   * element's 'id' attribute.
   */
  ariaDescribedBy: T.string,

  /** This prop helps users to fill forms faster, especially on mobile devices. (e.g. name, email,
   * tel, etc.) See notes for more information.
   */
  autoComplete: T.string,

  /** If true, the input element will be focused on mount. */
  autoFocus: T.bool,

  /** Override or extend the styles applied to the component. See CSS API below for more details. */
  classes: T.object,

  /** The color of the input border on focus. */
  color: T.string,

  /** The default input element value. Use when the component is not controlled. */
  defaultValue: T.any,

  /** If true, the input element will be disabled. */
  disabled: T.bool,

  /** If true, the input will indicate an error. */
  error: T.bool,

  /** Object detailing icon to be displayed as adornment. If onClick
   * is provided, an icon button will be rendered.
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

  /** Props applied to the MUI Input component. */
  InputProps: T.object,

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

  /** Function to be run when user input is not valid url format. Validity will be checked
   * whenever input changes - however this function will only be called when validity toggles from
   * valid to invalid (not on every change while input is invalid). */
  onInvalidInput: T.func.isRequired,

  /** Function to be run when user input changes from valid to invalid url format. Validity will
   * be checked whenever input changes - however this function will only be called when validity
   * toggles (not on every change while input is valid). */
  onValidInput: T.func.isRequired,

  /** The short hint displayed in the input before the user enters a value. */
  placeholder: T.string,

  /** If true, the input element will be required. */
  required: T.bool,

  /** If this prop is passed, the html input element will be of type 'search' and the values passed
   * will be suggested in a dropdown as the user types.
   */
  searchValues: T.array,

  /** Object detailing text to be displayed as adornment. If onClick
   * is provided, a text button will be rendered. Ensure font/weight passed are available
   * globally. (font string example: `'Montserrat', sans-serif`)
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

  /** Specifies the type attribute passed to the underlying input element. Accepts one of the
   * following: number, password, search, or text (default). Note that if 'search' is
   * passed, you'll need to pass a datalistId prop as well.
   */
  type: T.oneOf(['number', 'password', 'search', 'text']),

  /** See notes for more information. */
  validatorOptions: T.object,

  /** The value of the input element, required for a controlled component. */
  value: T.any,

  /** The style of the input. Either 'outlined' (default) or 'standard'. */
  variant: T.oneOf(['standard', 'outlined']),
};

UrlInput.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  error: false,
  required: false,
  type: 'text',
  variant: 'outlined',
};

export default UrlInput;
