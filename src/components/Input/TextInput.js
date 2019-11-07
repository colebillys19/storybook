/* eslint-disable no-tabs */
/**
 *
 * TextInput
 * @description: Text Field Input.
 * API USAGE: {
  * autoComplete (string) This property helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it here: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
  * autoFocus	(bool) If true, the input will be focused during the first mount.
  * defaultValue (string|number) The default value of the Input element.
  * disabled (bool) If true, the input will be disabled.
  * error	(bool) If true, the label will be displayed in an error state.
  * FormHelperTextProps	(object) Properties applied to the FormHelperText element.
  * fullWidth	(bool) If true, the input will take up the full width of its container.
  * helperText (node)	The helper text content.
  * id (string) The id of the input element. Use that property to make label and helperText accessible for screen readers.
  * InputLabelProps	(object) Properties applied to the InputLabel element.
  * InputProps (object) Properties applied to the Input element.
  * inputProps (object)	Attributes applied to the native input element.
  * inputRef (func|object) Use that property to pass a ref callback to the native input component.
  * label	(node) The label content. If you do not pass a label in, there will not be one.
  * margin	(enum) 'none'|'dense'|'normal' If dense or normal, will adjust vertical spacing of this and contained components.
  * multiline	(bool) If true, a textarea element will be rendered instead of an input.
  * name (string) Name attribute of the input element.
  * onChange(func) Callback fired when the value is changed.
  * placeholder (string) The short hint displayed in the input before a user enters a value.
  * required (bool) If true, the label is displayed as required and the input will be required.
  * rows (string|number) Number of rows to display when multiline option is set to true.
  * rowsMax (string|number) Maximum number of rows to display when multiline option is set to true.
  * select (bool) Render a Select element while passing the Input element to Select as input parameter. If this option is set you must pass the options of the select as children.
  * SelectProps (object) Properties applied to the Select element.
  * type (string) Type attribute of the Input element. It should be a valid HTML5 input type.
  * value	(string|number|bool|arrayOf) The value of the Input element, required for a controlled component.
  * variant	(enum):'standard'|'outlined'|'filled'|'standard' The variant to use.
* }
*/

import React, { Fragment } from 'react';
import T from 'prop-types';
import ConditionalRender from '../../utils/ConditionalRender';
import InputLabel from './sub-components/InputLabel';
import { BaseTextInput } from './styles/TextInput.styles';

/**
 * Use `TextInput` when you need a text field input. Typically used in forms and dialogs.
 */
const TextInput = ({
  className,
  disabled,
  error,
  FormHelperTextProps,
  helperText,
  InputLabelProps,
  InputProps,
  label,
  multiline,
  name,
  onBlur,
  onChange,
  required,
  type,
  value,
  variant,
  ...restProps
}) => {
  const shouldRenderLabel = !!label;
  const Label = (
    <InputLabel
      className={className}
      text={label}
      {...InputLabelProps}
    />
  );
  return (
    <Fragment>
      <ConditionalRender
        Component={Label}
        shouldRender={shouldRenderLabel}
      />
      <BaseTextInput
        classes={{ root: 'formControl' }}
        className={className}
        disabled={disabled}
        error={error}
        FormHelperTextProps={{
          classes: { root: 'helper' },
          ...FormHelperTextProps,
        }}
        helperText={helperText}
        InputProps={{
          classes: {
            focused: 'focused',
            input: 'input',
            inputMultiline: multiline ? 'textarea' : null,
            notchedOutline: variant === 'outlined' ? 'outline' : null,
            root: 'base-input',
          },
          inputProps: { min: type === 'number' ? 1 : null },
          ...InputProps,
        }}
        margin="normal"
        multiline={multiline}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
        variant={variant}
        {...restProps}
      />
    </Fragment>
  );
};

TextInput.propTypes = {
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   */
  autoComplete: T.string,
  /**
   * If true, the input element will be focused during the first mount.
   */
  autoFocus: T.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * The default value of the input element.
   */
  defaultValue: T.any,
  /**
   * If true, the input will be disabled.
   */
  disabled: T.bool,
  /**
   * If true, the label will be displayed in an error state.
   */
  error: T.oneOfType([
    T.string,
    T.oneOf([null]),
    T.bool,
  ]),
  /**
   * The props passed to the material-ui FormHelperText component.
   */
  FormHelperTextProps: T.object,
  /**
   * If true, the input will take up the full width of its container.
   */
  fullWidth: T.bool,
  /**
   * The text displayed in the material-ui FormHelperText component.
   */
  helperText: T.oneOfType([
    T.string,
    T.oneOf([null]),
    T.node,
  ]),
  /**
   * The id of the input element.
   * Use this prop to make label and helperText accessible for screen readers.
   */
  id: T.string,
  /**
   * Props applied to the InputLabel element.
   */
  InputLabelProps: T.object,
  /**
   * Props applied to the Input element.
   * It will be a FilledInput, OutlinedInput or Input component depending on the variant prop value.
   */
  InputProps: T.object,
  /**
   * Attributes applied to the input element.
   */
  inputProps: T.object,
  /**
   *  Ref passed to the input element.
   */
  inputRef: T.oneOfType([
    T.func,
    T.shape({ current: T.any }),
  ]),
  /**
   * The label content. If you do not pass a label in, there will not be one.
   */
  label: T.oneOfType([
    T.string,
    T.element,
    T.oneOf([null]),
    T.node,
  ]),
  /**
   * If dense or normal, will adjust vertical spacing of this and contained components.
   */
  margin: T.oneOf(['none', 'dense', 'normal']),
  /**
   * If true, a textarea element will be rendered instead of an input.
   */
  multiline: T.bool,
  /**
   * Name attribute of the input element.
   */
  name: T.string,
  /**
   * The callback fired when an onBlur event is triggered.
   */
  onBlur: T.func,
  /**
   * The callback fired when an onChange event is triggered.
   */
  onChange: T.func.isRequired,
  /**
   * The short hint displayed in the input before a user enters a value.
   */
  placeholder: T.string,
  /**
   * If true, the label is displayed as required and the input will be required.
   */
  required: T.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: T.oneOfType([T.string, T.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: T.oneOfType([T.string, T.number]),
  /**
   * Render a Select element while passing the Input element to Select as input parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: T.bool,
  /**
   * Props applied to the Select element.
   */
  SelectProps: T.object,
  /**
   * Type attribute of the Input element. It should be a valid HTML5 input type.
   */
  type: T.string,
  /**
   * The value of the Input element, required for a controlled component.
   */
  value: T.any,
  /**
   * The variant to use.
   */
  variant: T.oneOf([
    'filled',
    'outlined',
    'standard',
  ]),
};

TextInput.defaultProps = {
  disabled: false,
  error: null,
  helperText: null,
  label: null, // pass in the label prop for a label to appear
  multiline: false,
  required: false,
  select: false,
  type: 'text',
  value: null,
  variant: 'outlined',
};

export default TextInput;
