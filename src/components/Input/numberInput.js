import React from 'react';
import T from 'prop-types';

import { formatNumbers } from './helpers';
import TextFieldInput from './textFieldInput';

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
    <TextFieldInput
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
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  value: T.string,
};

export default NumberInput;
