import styled from 'styled-components';
import BaseButton from '../BaseButton';

import TooltipButton from '../TooltipButton';

export const StyledBaseButton = styled(BaseButton)`
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  display: inline-flex;
  margin: 1rem;
  padding: 0.8rem 1rem;
  &:active {
    box-shadow: none;
  }
  &:hover {
    background-color: transparent;
  }
`;

export const StyledTooltipButton = styled(TooltipButton)`
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  display: inline-flex;
  margin: 1rem;
  padding: 0.8rem 1rem;
  &:active {
    box-shadow: none;
  }
  &:hover {
    background-color: transparent;
  }
`;
