import React from 'react';
import T from 'prop-types';

import { StyledSpan } from './styledComponents';

const FontAdornment = ({
  font,
  size,
  text,
  weight,
}) => (
  <StyledSpan
    font={font}
    size={size}
    weight={weight}
  >
    {text}
  </StyledSpan>
);

FontAdornment.propTypes = {
  font: T.string,
  size: T.string,
  text: T.string.isRequired,
  weight: T.string,
};

export default FontAdornment;
