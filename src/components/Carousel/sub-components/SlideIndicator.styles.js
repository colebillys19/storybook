import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const Indicator = styled((props) => (
  <Radio
    classes={{ checked: 'checked', root: 'root' }}
    styles={{ buttonRipple: { color: 'black' } }}
    {...props}
  />
))`
  &:hover {
    color: black;
    background-color: transparent;
  }

  &.checked {
    color: black;
  }

  &.checked:hover {
    background-color: transparent;
  }

  & svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
