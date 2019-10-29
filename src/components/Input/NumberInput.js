import React from 'react';
import T from 'prop-types';

import { formatNumbers } from './helpers';
import { StyledNumberInput } from './styles/NumberInput.styles';

export const NumberInput = ({
  helperText,
  name,
  onChange,
  value,
  ...restProps
}) => {
  const handleNumInput = (e) => {
    const numberAmount = formatNumbers(e.target.value);
    e.target.value = numberAmount;
    onChange(e);
  };

  return (
    <StyledNumberInput
      helperText={helperText}
      name={name}
      onChange={handleNumInput}
      value={value}
      {...restProps}
    />
  );
};

NumberInput.propTypes = {
  /**
   * The text displayed in the material-ui FormHelperText component.
   */
  helperText: T.string,
  /**
   * Name attribute of the input element.
   */
  name: T.string,
  /**
   * The callback fired when an onChange event is triggered.
   */
  onChange: T.func.isRequired,
  /**
   * The value of the Input element, required for a controlled component.
   */
  value: T.string,
};

export default NumberInput;
