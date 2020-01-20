import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledSpan = styled.span`
  color: ${({ color }) => color || ''};
  font-family: ${({ font }) => font || ''};
  font-size: ${({ size }) => size || '1.4rem'};
  font-weight: ${({ weight }) => weight || ''};
  margin: ${({ position, variant }) => {
    if (variant === 'outlined') {
      return position === 'start' ? '0 -1rem 0 -0.3rem' : '0 -0.3rem 0 -1rem';
    }
    return position === 'start' ? '0 -1rem 0 0.9rem' : '0 0.9rem 0 -1rem';
  }};
`;

export const StyledButton = styled(({
  // color, hoverColor, and size pulled from props here to mitigate browser errors
  buttonMouseDown,
  color,
  hoverColor,
  size,
  ...props
}) => (
  <Button classes={{ label: 'label' }} {...props} />
))`
  border-radius: 0;
  border-bottom: none;
  border-left: ${({ position }) => position === 'start' ? 'none' : '0.1rem solid #ebebeb'};
  border-right: ${({ position }) => position === 'start' ? '0.1rem solid #ebebeb' : 'none'};
  border-top: none;
  margin: ${({ position, variant }) => {
    if (variant === 'outlined') {
      return position === 'start' ? '0 -1rem 0 -1.3rem' : '0 -1.3rem 0 -1rem';
    }
    return position === 'start' ? '0 -1rem 0 -0.1rem' : '0 -0.1rem 0 -1rem';
  }};
  min-height: 4rem;
  min-width: 0;
  opacity: ${({ buttonMouseDown }) => buttonMouseDown ? '0.7' : '1'};
  padding: 0 1rem;
  & .label {
    color: ${({ color }) => color || ''};
    font-family: ${({ font }) => font || ''};
    font-size: ${({ size }) => size || '1.4rem'};
    font-weight: ${({ weight }) => weight || ''};
    letter-spacing: 0;
    text-transform: none;
  }
  &:hover {
    border-left: ${({ position }) => position === 'start' ? 'none' : '0.1rem solid #c4c4c4'};
    border-right: ${({ position }) => position === 'start' ? '0.1rem solid #c4c4c4' : 'none'};
    & .label {
      color: ${({ hoverColor }) => hoverColor || ''};
    }
  }
`;
