import React from 'react';
import T from 'prop-types';

import { formatText } from './helpers';
import TextFieldInput from './textFieldInput';

export const NameInput = ({
  helperText,
  name,
  onChange,
  value,
  ...restProps
}) => {
  const handleTextInput = (e) => {
    const textInput = formatText(e.target.value);
    e.target.value = textInput;
    onChange(e);
  };

  return (
    <TextFieldInput
      helperText={helperText}
      name={name}
      onChange={handleTextInput}
      value={value}
      {...restProps}
    />
  );
};

NameInput.propTypes = {
  helperText: T.string,
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  value: T.string,
};

export default NameInput;
