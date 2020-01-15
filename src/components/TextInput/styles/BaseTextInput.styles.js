// import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import {
  typography,
  msBrightPurple,
  errorRed,
} from '../../../utils/defaultStyleHelper';

export const StyledTextField = styled(TextField)`
  background-color: white;
  border-radius: 0.5rem;
  opacity: ${({ disabled }) => disabled ? '0.5' : '1'};
  & .input {
    font-size: ${typography.size.s2};
    font-family: ${typography.font.overpass};
    min-height: 40px;
    padding: 0 1rem;
  }
  & .input:focus + fieldset {
    ${null/* eslint-disable indent */}
    border-color: ${({ color, error }) => {
      if (error) {
        return errorRed;
      }
      if (color) {
        return color;
      }
      return msBrightPurple;
    }};
    ${null/* eslint-enable indent */}
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
