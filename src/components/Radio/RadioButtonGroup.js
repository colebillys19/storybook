import React from 'react';
import T from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

import { StyledFormControlLabel, StyledRadioButton } from './styles/Radio.styles';

export const RadioButtonGroup = ({
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
      {options.map(({ label, value }) => (
        <StyledFormControlLabel
          key={`radio-option-${value}`}
          control={<StyledRadioButton />}
          label={label}
          value={value}
          {...restProps}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

RadioButtonGroup.defaultProps = { row: false };

RadioButtonGroup.propTypes = {
  checked: T.bool,
  checkedIcon: T.node,
  color: T.oneOf(['primary', 'secondary', 'default']),
  disabled: T.bool,
  disableRipple: T.bool,
  Icon: T.node,
  id: T.string,
  inputProps: T.object,
  inputRef: T.oneOfType([T.func, T.shape({ current: T.any })]),
  labelPlacement: T.oneOf(['end', 'start', 'top', 'bottom']),
  name: T.string,
  onChange: T.func.isRequired,
  options: T.arrayOf(T.shape({
    label: T.string,
    value: T.oneOfType([T.bool, T.number, T.string]).isRequired,
  })).isRequired,
  required: T.bool,
  row: T.bool,
  type: T.string,
  value: T.any,
};

RadioButtonGroup.defaultProps = { color: 'secondary', labelPlacement: 'end' };

export default RadioButtonGroup;
