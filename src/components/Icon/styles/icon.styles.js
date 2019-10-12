import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import { greyBorder, muiBoxShadow } from '../../../shared/defaultStyleHelper';

export const StyledTooltip = styled((props) => (
  <Tooltip
    classes={{ popper: props.className, tooltip: 'tooltip' }}
    {...props}
  />
))`
  opacity: 1;
  & .tooltip {
    background-color: white;
    border: ${greyBorder};
    box-shadow: ${muiBoxShadow};
    color: black;
    font-size: 1.3rem;
  }
`;
