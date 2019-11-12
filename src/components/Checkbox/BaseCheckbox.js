import React from 'react';
import T from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

const BaseCheckbox = (props) => <Checkbox {...props} />;

BaseCheckbox.propTypes = {
  checked: T.bool,
  disabled: T.bool,
  disableRipple: T.bool,
  /**
   * The id of the input element;
   */
  id: T.string,
  /**
   * If true, the component appears indeterminate.
   * This does not set the native input element to indeterminate due to inconsistent behavior
   * across browsers. However, we set a data-indeterminate attribute on the input.
   */
  indeterminate: T.bool,
  /**
   * Used to pass a ref to the input element.
   */
  inputRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  /**
   * Function to be called when the state is changed.
   */
  onChange: T.func,
  required: T.bool,
  /**
   * The input component prop type.
   */
  type: T.string,
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: T.any,
};

BaseCheckbox.defaultProps = { disableRipple: true };

export default BaseCheckbox;
