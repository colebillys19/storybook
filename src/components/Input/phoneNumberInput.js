import React from 'react';
import T from 'prop-types';
import iconDictionary from 'utils/iconDictionary';

import TextInputWithAdornment from './textInputWithAdornment';

const Plus1 = iconDictionary('plus1', null, 'plusOne');

export const PhoneInput = ({
  name,
  onChange,
  value,
  ...restProps
}) => {
  const symbolToAdd = (currentValue) => {
    const curValLength = currentValue.length;
    if (curValLength === 0) {
      return `(${currentValue}`;
    }
    if (curValLength === 3 && currentValue.indexOf('(') <= -1) {
      return `${currentValue})`;
    } if (curValLength === 4 && currentValue.indexOf('(') > -1) {
      return `${currentValue})`;
    } if (curValLength === 8) {
      return `${currentValue}-`;
    }
    return currentValue;
  };

  const addPhoneDash = (e) => {
    const valueInput = value || '';
    const eventCode = e.keyCode ? e.keyCode : e.charCode;
    if (eventCode < 48 || eventCode > 57 || valueInput.length > 12) {
      return e.preventDefault();
    }
    if (eventCode === 8) {
      return onChange(e);
    }
    const formattedValue = symbolToAdd(valueInput);
    e.target.value = formattedValue;
    return onChange(e);
  };


  return (
    <TextInputWithAdornment
      adornmentComponent={Plus1}
      name={name}
      onChange={onChange}
      onKeyPress={addPhoneDash}
      placeholder="(XXX)XXX-XXXX"
      position="start"
      value={value}
      {...restProps}
    />
  );
};

PhoneInput.propTypes = {
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  value: T.string.isRequired,
};

export default PhoneInput;
