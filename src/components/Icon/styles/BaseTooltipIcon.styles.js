import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

export const StyledTooltip = styled((props) => (
  <Tooltip
    classes={{ popper: props.className, tooltip: 'tooltip' }}
    {...props}
  />
))`
  & .tooltip {
    font-size: 1.2rem;
  }
`;
