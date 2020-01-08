import React from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

import { msBrightPurple, muiRed } from '../../../utils/defaultStyleHelper';

export const StyledInput = styled((props) => (
  <InputBase classes={{ input: 'input' }} {...props} />
))`
  & .input {
    background-color: #fff;
    border-radius: 0.5rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: ${({ error }) => error ? muiRed : '#b8b8b8'};
    box-sizing: border-box;
    font-size: 1.4rem;
    min-height: 3.8rem;
    min-width: 18rem;
    opacity: ${({ disabled }) => disabled ? '0.5' : '1'};
    padding: 1rem 1.2rem;
    ${null/* eslint-disable indent */}
    &:hover {
      border-color: ${({ disabled, error }) => {
        if (disabled) {
          return '';
        }
        if (error) {
          return muiRed;
        }
        return '#1f1f1f';
      }};
    }
    &:focus {
      border-width: 0.2rem;
      border-color: ${({ color, error }) => {
        if (error) {
          return muiRed;
        }
        if (color) {
          return color;
        }
        return msBrightPurple;
      }};
    }
    ${null/* eslint-enable indent */}
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
  color: #888;
`;
