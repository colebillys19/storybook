import React from 'react';
import T from 'prop-types';

import { StyledButton } from './styledComponents';

const TextButtonAdornment = ({ onClick, text, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    {text}
  </StyledButton>
);

TextButtonAdornment.propTypes = {
  color: T.string,
  font: T.string,
  size: T.string,
  text: T.string.isRequired,
  weight: T.string,
};

export default TextButtonAdornment;
