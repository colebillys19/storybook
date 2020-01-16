import React from 'react';
// import T from 'prop-types';
import { isEmail } from 'validator';

import BaseTextInput from './BaseTextInput';

const EmailInput = ({
  onInvalidInput,
  ...props
}) => {
  const onBlur = (e) => {
    if (!isEmail(e.target.value)) {
      onInvalidInput();
    }
  }; // validate input
  return (
    <BaseTextInput
      InputProps={{ onBlur }}
      type="email"
      {...props}
    />
  );
};

EmailInput.propTypes = {};

EmailInput.defaultProps = {};

export default EmailInput;
