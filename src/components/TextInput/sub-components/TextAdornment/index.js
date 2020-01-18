import React from 'react';
import T from 'prop-types';

import { StyledButton, StyledSpan } from './styledComponents';

const TextAdornment = ({
  font,
  onClick,
  text,
  ...props
}) => {
  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // format font to ensure compatibility with storybook select knob
  const formattedFont = font.replace(/&#39;/g, '');

  return onClick ? (
    <StyledButton
      font={formattedFont}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      {...props}
    >
      {text}
    </StyledButton>
  ) : (
    <StyledSpan font={formattedFont} {...props}>
      {text}
    </StyledSpan>
  );
};

TextAdornment.propTypes = {
  color: T.string,
  font: T.string,
  hoverColor: T.string,
  onClick: T.func,
  position: T.string.isRequired,
  size: T.string,
  text: T.string.isRequired,
  weight: T.string,
};

export default TextAdornment;
