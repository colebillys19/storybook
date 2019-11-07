import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledBaseButton = styled((props) => (
  <Button classes={{ label: 'label', root: 'root' }} {...props} />
))`
  align-items: center;
  box-shadow: none;
  display: inline-flex;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem;
  padding: 1rem 2.8rem;
  text-transform: none;
  &:active {
    box-shadow: none;
  }
  & .root {
    min-width: 0;
  }
`;
