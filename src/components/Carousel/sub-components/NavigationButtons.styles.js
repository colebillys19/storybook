import React from 'react';
import styled from 'styled-components';

import FlatIconButton from '../../Button/FlatIconButton';
import { msBrightPurple } from '../../../utils/defaultStyleHelper';

export const NavButton = styled((props) => (
  <FlatIconButton
    classes={{ disabled: 'disabled' }}
    {...props}
  />
))`
  background-color: transparent;
  color: ${msBrightPurple};
  height: 100%;
  margin: auto 0;
  min-width: 2rem;
  padding: 0;
  position: relative;
  transform: scale(1.25);
  width: 1%;
  &:hover {
    transform: scale(1.5);
  }
  &.disabled {
    background-color: transparent;  
    &:hover {
      background-color: transparent;
    }
  }
`;

export const LeftNavButton = styled(NavButton)`
  margin-right: 0;
  &:hover {
    box-shadow: none;
  }
`;

export const RightNavButton = styled(NavButton)`
  margin-left: 0;
  &:hover {
    box-shadow: none;
  }
`;
