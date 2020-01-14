import React from 'react';
import T from 'prop-types';

import { StyledSpan } from './styledComponents';

const TextAdornment = ({ text, ...props }) => (
  <StyledSpan {...props}>
    {text}
  </StyledSpan>
);

TextAdornment.propTypes = {
  color: T.string,
  font: T.string,
  size: T.string,
  text: T.string.isRequired,
  weight: T.string,
};

export default TextAdornment;
