// import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { typography } from '../../../utils/defaultStyleHelper';

export const StyledTextField = styled(TextField)`
  background-color: white;
  border-radius: 0.5rem;
  & .input {
    font-size: ${typography.size.s2};
    min-height: 40px;
    padding: 0 1rem;
  }
  & .input:focus + fieldset {
    border-color: green;
  }
  & * {
    transition: none;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 0 0 0.2rem 0.5rem;
`;

export const StyledSpan = styled.span`
  display: block;
  margin: 0.4rem 0 0 0.5rem;
  font-size: 1.2rem;
  color: #666;
`;
