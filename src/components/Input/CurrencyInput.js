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

export default CurrencyInput;
