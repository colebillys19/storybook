/**
 *
 * BaseTextInput
 * @description: Base Text Input.
 * API USAGE: {
 *    disabled [bool]: Boolean to disable the input field. Defaults to false
 *    label [string]: Input field label. This label will be located right above the input field
 *    onChange [function]: On change function
 *    required [bool]: If the field is required
 *    value [string]: Input field value
 * }
 */

import React from 'react';
import T from 'prop-types';
import ConditionalRender from 'components/base_ui/ConditionalRender';
import { StyledBaseInput, StyledInputGroup, StyledLabel } from './styles/baseTextInputStyles';

const BaseTextInput = ({
  disabled,
  label,
  labelWidth,
  onChange,
  required,
  type,
  value,
  ...restProps
}) => {
  const shouldRenderLabel = !!label;
  const Label = <StyledLabel>{label}</StyledLabel>;
  return (
    <StyledInputGroup className="inputGroup" {...restProps}>
      <ConditionalRender
        Component={Label}
        shouldRender={shouldRenderLabel}
      />
      <StyledBaseInput
        classes={{ focused: 'focused', notchedOutline: 'outline', root: 'input' }}
        disabled={disabled}
        labelWidth={labelWidth}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
        {...restProps}
      />
    </StyledInputGroup>
  );
};

BaseTextInput.defaultProps = {
  disabled: false,
  labelWidth: 0,
  type: 'text',
};

BaseTextInput.propTypes = {
  disabled: T.bool,
  label: T.string,
  labelWidth: T.number,
  onChange: T.func.isRequired,
  required: T.bool,
  type: T.string,
  value: T.oneOfType([T.string, T.number, T.bool]),
};

export default BaseTextInput;
