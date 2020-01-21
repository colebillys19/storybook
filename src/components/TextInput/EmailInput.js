import React, { useState } from 'react';
// import T from 'prop-types';
import { isEmail } from 'validator';

import BaseTextInput from './BaseTextInput';

const EmailInput = ({
  onChange,
  onInvalidInput,
  onValidInput,
  ...props
}) => {
  const [isValid, toggleValidity] = useState(true);

  const validateInput = (e) => {
    if (e.target.value && !isEmail(e.target.value) && isValid) {
      onInvalidInput();
      toggleValidity(false);
    } else if (e.target.value && isEmail(e.target.value) && !isValid) {
      onValidInput();
      toggleValidity(true);
    }
  };

  const onChangeToPass = (e) => {
    validateInput(e);
    onChange(e);
  };

  return (
    <BaseTextInput
      InputProps={{ onChange: onChangeToPass }}
      {...props}
    />
  );
};

EmailInput.propTypes = {};

EmailInput.defaultProps = {};

export default EmailInput;
