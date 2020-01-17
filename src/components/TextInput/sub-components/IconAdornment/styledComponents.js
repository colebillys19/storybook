import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 3.1rem;
  justify-content: center;
  margin: ${({ position, variant }) => {
    if (variant === 'outlined') {
      return position === 'start' ? '0 -1.6rem 0 -1rem' : '0 -0.8rem 0 -1.6rem';
    }
    return position === 'start' ? '0 -1.6rem 0 0.2rem' : '0 0.4rem 0 -1.6rem';
  }};
  width: 3.1rem;
`;

export const StyledIconButton = styled(({ hoverColor, ...props }) => <IconButton {...props} />)`
  margin: ${({ position, variant }) => {
    if (variant === 'outlined') {
      return position === 'start' ? '0 -1rem 0 -0.4rem' : '0 -0.4rem 0 -1rem';
    }
    return position === 'start' ? '0 -1rem 0 0.8rem' : '0 0.8rem 0 -1rem';
  }};
  &:hover {
    & svg {
      color: ${({ hoverColor }) => hoverColor || ''};
    }
  }
`;
