import React from 'react';
import styled from 'styled-components';
import TextInputWithAdornment from '../sub-components/TextInputWithAdornment';

export const StyledCurrencyInput = styled((props) => (
  <TextInputWithAdornment
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
