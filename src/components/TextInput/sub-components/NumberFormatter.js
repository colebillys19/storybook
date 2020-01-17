import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const NumberFormatCustom = ({ onChange, ...restProps }) => (
  <NumberFormat
    {...restProps}
    isNumericString
    onValueChange={(values) => { onChange({ target: { value: values.value } }); }}
    prefix="$"
    thousandSeparator
  />
);

NumberFormatCustom.propTypes = { onChange: PropTypes.func.isRequired };
