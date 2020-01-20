import React, { useState } from 'react';
import T from 'prop-types';

import { StyledButton, StyledSpan } from './styledComponents';

const TextAdornment = ({
  font,
  onClick,
  text,
  ...props
}) => {
  const [buttonMouseDown, toggleButtonMouseDown] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    toggleButtonMouseDown(true);
  };

  const resetOpacity = (e) => {
    e.preventDefault();
    toggleButtonMouseDown(false);
  };

  // format font to ensure compatibility with storybook select knob
  const formattedFont = font.replace(/&#39;/g, '');

  return onClick ? (
    <StyledButton
      buttonMouseDown={buttonMouseDown}
      font={formattedFont}
      onBlur={resetOpacity}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseOut={resetOpacity}
      onMouseUp={resetOpacity}
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
