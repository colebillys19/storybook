// import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
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

export const StyledInputAdornment = styled(InputAdornment)``;
