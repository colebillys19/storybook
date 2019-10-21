import React from 'react';
import T from 'prop-types';
import iconDictionary from '../../utils/iconDictionary';

import { formatCurrency, formatAmountsWithCommas } from './helpers';
import { StyledCurrencyInput } from './styles/CurrencyInput.styles';

const Dollar = iconDictionary('dollar', 'small');

export const CurrencyInput = ({
  name,
  onChange,
  value,
  ...restProps
}) => {
  const addCurrencyComma = (e) => {
    const formattedValue = value ? formatAmountsWithCommas(value, false) : '';
    e.target.value = formattedValue;
    onChange(e);
  };

  const handleNumInput = (e) => {
    const currencyAmount = formatCurrency(e.target.value);
    e.target.value = currencyAmount;
    onChange(e);
  };

  return (
    <StyledCurrencyInput
      adornmentComponent={Dollar}
      name={name}
      onBlur={addCurrencyComma}
      onChange={handleNumInput}
      placeholder="0.00"
      position="start"
      value={value}
      {...restProps}
    />
  );
};

CurrencyInput.propTypes = {
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  value: T.string.isRequired,
};

export default CurrencyInput;
