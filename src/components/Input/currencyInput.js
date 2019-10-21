import React from 'react';
import T from 'prop-types';
import iconDictionary from '../../utils/iconDictionary';
import { formatAmountsWithCommas } from '../../utils/defaultStyleHelper';

import { formatCurrency } from './helpers';
import TextInputWithAdornment from './sub-components/TextInputWithAdornment';

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
    <TextInputWithAdornment
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
