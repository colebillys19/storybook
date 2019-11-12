import React from 'react';
import T from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

import { StyledFormControlLabel, StyledRadioButton } from './styles/BaseRadioButtonGroup.styles';

export const BaseRadioButtonGroup = ({
  disableRipple,
  labelPlacement,
  onChange,
  options,
  row,
  selected,
  ...restProps
}) => (
  <FormControl {...restProps}>
    <RadioGroup
      onChange={(e) => onChange(e.target.value)}
      row={row}
      value={selected}
      {...restProps}
    >
      {options.map(({
        disabled,
        label,
        value,
      }) => (
        <StyledFormControlLabel
          key={`radio-option-${value}`}
          control={<StyledRadioButton disableRipple={disableRipple} />}
          disabled={disabled}
          label={label}
          labelPlacement={labelPlacement}
          value={value}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

BaseRadioButtonGroup.propTypes = {
  disableRipple: T.bool,
  /**
   * The placement of labels in relation to their radio buttons.
   */
  labelPlacement: T.oneOf(['start', 'end', 'top', 'bottom']),
  /**
   * Function to be called when the state is changed.
   */
  onChange: T.func.isRequired,
  /**
   * An array of objects containing the label and value for each radio button.
   */
  options: T.arrayOf(T.shape({
    disabled: T.bool,
    label: T.string,
    value: T.any.isRequired,
  })).isRequired,
  /**
   * If true, displays the group as a row rather than a column.
   */
  row: T.bool,
  /**
   * The value of the radio button to be selected on render.
   */
  selected: T.any.isRequired,
};

BaseRadioButtonGroup.defaultProps = {
  disableRipple: false,
  labelPlacement: 'end',
  row: false,
};

export default BaseRadioButtonGroup;
