import React from 'react';
import T from 'prop-types';
import iconDictionary from '../../utils/iconDictionary';

import { formatCurrency, formatAmountsWithCommas } from './helpers';
import { StyledCurrencyInput } from './styles/CurrencyInput.styles';

const Dollar = iconDictionary('dollar', 'small');

/**
 * Use `CurrentInput` when an input with currency is needed.
 */
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
   * If true, the input will be disabled.
   */
  disabled: T.bool,
  /**
   * If true, the input will indicate an error.
   * This is normally obtained via context from FormControl.
   */
  error: T.bool,
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
   * The placeholder text.
   */
  placeholder: T.string,
  /**
   * The value of the Input element, required for a controlled component.
   */
  value: T.string,
};

CurrencyInput.defaultProps = {
  disabled: false,
  error: false,
};

export default CurrencyInput;
