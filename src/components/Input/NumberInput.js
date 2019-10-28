/** */

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
  helperText: T.string,
  name: T.string,
  onChange: T.func.isRequired,
  value: T.string,
};

export default NumberInput;
