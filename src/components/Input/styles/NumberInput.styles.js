import React from 'react';
import styled from 'styled-components';
import TextFieldInput from '../TextFieldInput';

export const StyledNumberInput = styled((props) => (
  <TextFieldInput
    classes={{ root: 'root' }}
    type="number"
    {...props}
  />
))`
  &.root {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }
  }
`;
