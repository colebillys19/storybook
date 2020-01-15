import React from 'react';
import T from 'prop-types';

import { StyledButton, StyledSpan } from './styledComponents';

const TextAdornment = ({
  onClick,
  text,
  ...props
}) => onClick ? (
  <StyledButton onClick={onClick} {...props}>
    {text}
  </StyledButton>
) : (
  <StyledSpan {...props}>
    {text}
  </StyledSpan>
);

TextAdornment.propTypes = {
  color: T.string,
  font: T.string,
  hoverColor: T.string,
  onClick: T.func,
  size: T.string,
  text: T.string.isRequired,
  weight: T.string,
};

export default TextAdornment;
