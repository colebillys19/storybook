// import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export const StyledTextField = styled(TextField)`
  background-color: white;
  border-radius: 0.5rem;
  & .input:focus + fieldset {
    border-color: red;
  }
  & * {
    transition: none;
  }
`;

export const StyledInputAdornment = styled(InputAdornment)``;
