import React from 'react';
import T from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

import {
  StyledFormControlLabel,
  StyledRadioButton,
} from './styles/Radio.styles';

/**
 * Use `RadioButtonGroup` when one selection is needed from a set options.
 */
export const RadioButtonGroup = ({
  labelPlacement,
  onChange,
  options,
  row,
  selected,
  ...restProps
}) => {
  const radio = (
    <StyledRadioButton
      classes={{ checked: 'checked', root: 'radio' }}
      {...restProps}
    />
  );

  return (
    <FormControl {...restProps}>
      <RadioGroup
        onChange={(e) => onChange(e.target.value)}
        row={row}
        value={selected}
        {...restProps}
      >
        {options.map(({ label, value }) => (
          <StyledFormControlLabel
            key={`radio-option-${value}`}
            classes={{ label: 'label' }}
            control={radio}
            label={label}
            value={value}
            {...restProps}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioButtonGroup.defaultProps = { row: false };

RadioButtonGroup.propTypes = {
  /**
   * If true, the component is checked.
   */
  checked: T.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: T.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * The color of the component.
   * It supports those theme colors that make sense for this component.
   */
  color: T.oneOf(['primary', 'secondary', 'default']),
  /**
   * If true, the switch will be disabled.
   */
  disabled: T.bool,
  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple: T.bool,
  /**
   * The icon to display when the component is unchecked.
   * Use the icon dictionary.
   */
  icon: T.node,
  /**
   * The id of the input element.
   */
  id: T.string,
  /**
   * Attributes applied to the input element.
   */
  inputProps: T.object,
  /**
   * Pass a ref to the input element.
   */
  inputRef: T.oneOfType([T.func, T.shape({ current: T.any })]),
  /**
   * Name attribute of the input element.
   */
  name: T.string,
  /**
   *  Callback fired when a radio button is selected.
   */
  onChange: T.func.isRequired,
  /**
   * The options displayed in the RadioButtonGroup.
   * An array of objects with properties label and value.
   */
  options: T.arrayOf(
    T.shape({
      label: T.string,
      value: T.oneOfType([T.bool, T.number, T.string]).isRequired,
    })
  ).isRequired,
  /**
   * The position of the label.
   */
  placement: T.oneOf(['end', 'start', 'top', 'bottom']),
  /**
   * If true, the input element will be required.
   */
  required: T.bool,
  /**
   * If true, the radio group is displayed in a row.
   */
  row: T.bool,
  /**
   * The input component prop type.
   */
  type: T.string,
  /**
   * The value of the component.
   * The DOM API casts this to a string.
   */
  value: T.any,
};

RadioButtonGroup.defaultProps = {
  color: 'secondary',
  placement: 'end',
};

export default RadioButtonGroup;
