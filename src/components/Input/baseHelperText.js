import React from 'react';
import T from 'prop-types';
import { StyledErrorText } from './styles/baseTextField.styles';

const HelperText = ({ helperText }) => (
  <StyledErrorText classes={{ root: 'helper' }}>
    {helperText}
  </StyledErrorText>
);

HelperText.propTypes = { helperText: T.string.isRequired };

export default HelperText;
