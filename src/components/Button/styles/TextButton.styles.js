import styled from 'styled-components';
import BaseButton from '../BaseButton';

import { msBrightPurple, msHoverPurple } from '../../../utils/defaultStyleHelper';

export const StyledBaseButton = styled(BaseButton)`
  align-items: center;
  background: transparent;
  box-shadow: none;
  color: ${msBrightPurple};
  display: inline-flex;
  font-size: 1.2rem;
  font-weight: 500;
  margin: .2rem 1rem;
  padding: 0;
  text-decoration: underline;
  text-transform: none;
  &:active {
    box-shadow: none;
  }
  &:hover {
    background: transparent;
    box-shadow: none;
    color: ${msHoverPurple};
    text-decoration: underline;
  };
`;
