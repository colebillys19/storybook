import React from 'react';
import T from 'prop-types';

import { StyledTextField } from './styles/BaseTextInput.styles';
import { getAdornment, validateProps } from './helpers';

const BaseTextInput = ({
  ariaDescribedBy,
  iconAdornment,
  InputProps,
  inputProps,
  textAdornment,
  ...props
}) => {
  validateProps(props);
  const adornmentProp = getAdornment(iconAdornment, textAdornment);
  /* eslint-disable react/jsx-no-duplicate-props */
  return (
    <StyledTextField
      InputProps={{
        classes: { input: 'input', multiline: 'multiline' },
        ...adornmentProp,
        ...InputProps,
      }}
      inputProps={{
        'aria-describedby': ariaDescribedBy,
        ...inputProps,
      }}
      variant="outlined"
      {...props}
    />
  );
  /* eslint-enable react/jsx-no-duplicate-props */
};

BaseTextInput.propTypes = {
  /** If BaseTextInput has associated helper text, pass a string as this prop that matches the
    * helper text element's 'id' attribute. */
  ariaDescribedBy: T.string,

  /** This prop helps users to fill forms faster, especially on mobile devices. (e.g. name, email,
    * tel, etc.)
    */
  autoComplete: T.string,

  /** If true, the input element will be focused during the first mount. */
  autoFocus: T.bool,

  /** Override or extend the styles applied to the component. See CSS API below for more details. */
  classes: T.object,

  /** The color of the input border on focus. */
  color: T.string,

  /** The id of the associated <datalist /> element. If 'search' is passed as the type prop, the
    * input needs to be associated with a <datalist /> element containing search suggestions as
    * nested <option />'s.
    */
  datalistId: T.string,

  /** The default input element value. Use when the component is not controlled. */
  defaultValue: T.any,

  /** If true, the input element will be disabled. */
  disabled: T.bool,

  /** If true, the input will indicate an error. */
  error: T.bool,

  /** Object detailing icon to be displayed as adornment. Accepts the following values. If onClick
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

  /** The short hint displayed in the input before the user enters a value. */
  placeholder: T.string,

  /** It prevents the user from changing the value of the field (not from interacting with the
    * field).
    */
  readOnly: T.bool,

  /** If true, the input element will be required. */
  required: T.bool,

  /** Object detailing text to be displayed as adornment. Accepts the following values. If onClick
    * is provided, a text button will be rendered. Ensure font/weight passed are available
    * globally.
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
    * following: email, number, search, tel, text (default), or url. Note that if 'search' is
    * passed, you'll need to pass a datalistId prop as well.
    */
  type: T.oneOf(['email', 'number', 'search', 'tel', 'text', 'url']),

  /** The value of the input element, required for a controlled component. */
  value: T.any,
};

BaseTextInput.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  error: false,
  InputProps: {},
  readOnly: false,
  required: false,
  type: 'text',
};

export default BaseTextInput;
