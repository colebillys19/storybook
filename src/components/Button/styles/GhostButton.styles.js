import styled from 'styled-components';

import BaseButton from '../BaseButton';

import {
  greyBorder,
  msBrightPurple,
  msGreyHover,
  msLightGrey,
} from '../../../utils/defaultStyleHelper';

export const StyledBaseButton = styled(BaseButton)`
  align-items: center;
  background-color: ${msLightGrey};
  border: ${greyBorder};
  box-shadow: none;
  color: ${msBrightPurple};
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
    background-color: ${msGreyHover};
  }
`;
