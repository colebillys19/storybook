import React from 'react';
import T from 'prop-types';
import NumberFormat from 'react-number-format';

import { StyledBaseTextInput } from './styles/CreditCardInput.styles';

const CreditCardInput = ({ ...props }) => (
  <NumberFormat
    {...props}
    customInput={StyledBaseTextInput}
    format="#### #### #### ####"
  />
);

CreditCardInput.propTypes = {
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

  /** The short hint displayed in the input before the user enters a value. */
  placeholder: T.string,

  /** If true, the input element will be required. */
  required: T.bool,

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

  /** The value of the input element, required for a controlled component. */
  value: T.any,

  /** The style of the input. Either 'outlined' (default) or 'standard'. */
  variant: T.oneOf(['standard', 'outlined']),
};

CreditCardInput.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  error: false,
  required: false,
  variant: 'outlined',
};

export default CreditCardInput;
