import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { msBrightPurple } from '../../../utils/defaultStyleHelper';

export const StyledTextField = styled((styledProps) => (
  <TextField
    classes={{ root: 'root' }}
    InputLabelProps={{ className: 'label' }}
    {...styledProps}
  />
))`
  &.root {
    div:after {
      border-bottom: 0.2rem solid ${({ color }) => color || msBrightPurple};
    }
    .label {
      color: #757575;
    }
  }
`;
