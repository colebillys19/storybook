import React from 'react';
import T from 'prop-types';
import { StyledErrorText } from './styles/TextField.styles';

const ErrorText = ({ error }) => (
  <StyledErrorText>
    {error}
  </StyledErrorText>
);

ErrorText.propTypes = { error: T.string.isRequired };

export default ErrorText;
