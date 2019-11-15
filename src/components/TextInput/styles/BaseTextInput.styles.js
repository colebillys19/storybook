import React from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

import { msBrightPurple } from '../../../utils/defaultStyleHelper';

export const StyledInput = styled((props) => (
  <InputBase classes={{ input: 'input' }} {...props} />
))`
  & .input {
    background-color: #fff;
    border-radius: 0.5rem;
    border: 0.1rem solid #b8b8b8;
    box-sizing: border-box;
    font-size: 1.4rem;
    min-height: 3.8rem;
    min-width: 18rem;
    padding: 1rem 1.2rem;
    &:hover {
      border-color: #1f1f1f;
    }
    &:focus {
      border-width: 0.2rem;
      border-color: ${({ color }) => color || msBrightPurple};
    }
  }
`;
