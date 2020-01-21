import React from 'react';
// import T from 'prop-types';
import { isURL } from 'validator';

import BaseTextInput from './BaseTextInput';

const UrlInput = ({
  onInvalidInput,
  ...props
}) => {
  const onBlur = (e) => {
    if (e.target.value && !isURL(e.target.value)) {
      onInvalidInput();
    }
  }; // validate input
  return (
    <BaseTextInput
      InputProps={{ onBlur }}
      {...props}
    />
  );
};

UrlInput.propTypes = {};

UrlInput.defaultProps = {};

export default UrlInput;
