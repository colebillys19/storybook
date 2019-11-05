import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import TooltipButton from '../TooltipButton';

export const StyledBaseButton = styled(Button)`
  align-items: center;
  background-color: transparent;
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
  &:hover {
    background-color: transparent;
  }
`;

export const StyledTooltipButton = styled(TooltipButton)`
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  display: inline-flex;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem;
  padding: 0.5rem 1rem;
  text-transform: none;
  &:active {
    box-shadow: none;
  }
  &:hover {
    background-color: transparent;
  }
`;
