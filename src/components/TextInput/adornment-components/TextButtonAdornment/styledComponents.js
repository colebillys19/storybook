import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledButton = styled((props) => (
  <Button classes={{ label: 'label' }} {...props} />
))`
  margin: ${({ position }) => position === 'start' ? '0 0 0 -0.8rem' : '0 -0.8rem 0 0'};
  min-width: 0;
  & .label {
    color: ${({ color }) => color || ''};
    font-family: ${({ font }) => font || ''};
    font-size: ${({ size }) => size || ''};
    font-weight: ${({ weight }) => weight || ''};
    letter-spacing: 0;
    text-transform: none;
  }
`;
