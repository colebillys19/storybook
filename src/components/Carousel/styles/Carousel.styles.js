import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';

import { FlatIconButton } from '../../Button';
import { ssMainBlue } from '../../../utils/defaultStyleHelper';

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 90%;
`;

export const OverflowWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const SlidingContainer = styled.div`
  display: flex;
  transform: ${({ position, width }) => `translateX(${-1 * width * position}%)`};
  transition: transform 0.7s ease-in-out;
`;

export const CarouselItem = styled.div`
  flex-shrink: 0;
  padding: 0 1rem;
  width: ${({ width }) => `${width}%`};
`;

export const NavButton = styled((props) => (
  <FlatIconButton
    classes={{ disabled: 'disabled' }}
    {...props}
  />
))`
  background-color: transparent;
  color: ${ssMainBlue};
  height: 100%;
  margin: auto 0;
  min-width: 2rem;
  padding: 0;
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
  margin-left: 1rem;
`;

export const RightNavButton = styled(NavButton)`
  margin-right: 0.4rem;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const Indicator = styled((props) => (
  <Radio
    classes={{ checked: 'checked' }}
    {...props}
  />
))`
  &:hover {
    color: black;
  }

  &.checked {
    color: black;
  }
`;
