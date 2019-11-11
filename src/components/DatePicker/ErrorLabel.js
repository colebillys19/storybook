import React from 'react';
import T from 'prop-types';

import { DatePickerErrorLabel } from './styles/BaseDatePicker.styles';

const ErrorLabel = ({ error, restProps }) => (
  <DatePickerErrorLabel {...restProps}>
    {error}
    <span>&thinsp;*</span>
  </DatePickerErrorLabel>
);


ErrorLabel.propTypes = { error: T.string };

export default ErrorLabel;
