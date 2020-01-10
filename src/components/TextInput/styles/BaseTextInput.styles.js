import React from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';

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
    min-width: 24rem;
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

export const StyledInputWithAdornment = styled((props) => (
  <StyledInput classes={{ input: 'input' }} {...props} />
))`
  & .input {
    ${null/* eslint-disable indent */}
    padding: ${({ adornmentPlacement }) => (
      adornmentPlacement === 'start' ? '1rem 1.2rem 1rem 3.9rem' : '1rem 3.8rem 1rem 1.2rem'
    )};
    ${null/* eslint-enable indent */}
  }
`;

export const StyledInputAdornment = styled((props) => (
  <InputAdornment classes={{ root: 'root' }} {...props} />
))`
  &.root {
    position: absolute;
    left: ${({ adornmentPlacement }) => adornmentPlacement === 'start' ? '1.2rem' : ''};
    right: ${({ adornmentPlacement }) => adornmentPlacement === 'start' ? '' : '0.4rem'};
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
