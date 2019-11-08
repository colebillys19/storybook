import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';

import FlatIconButton from '../../Button/FlatIconButton';
import { ssMainBlue } from '../../../utils/defaultStyleHelper';
import { BaseCard } from '../../Card';

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const StyledCard = styled(BaseCard)`
  border-radius: 0;
  box-shadow: none;
  margin: 2rem 0;
  min-width: 80rem;
  padding: 0;
  width: 100%;
`;

export const StyledCardTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.6rem 3.6rem;
  text-transform: uppercase;
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
    disableFocusRipple={false}
    disableRipple={false}
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

  &:hover {
    box-shadow: none;
  }
`;

export const RightNavButton = styled(NavButton)`
  margin-right: 0.4rem;

  &:hover {
    box-shadow: none;
  }
`;

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
