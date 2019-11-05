import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { msBrightPurple, msHoverPurple } from '../../../utils/defaultStyleHelper';

export const StyledBaseButton = styled(Button)`
  align-items: center;
  background-color: ${msBrightPurple};
  box-shadow: none;
  color: white;
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
    background-color: ${msHoverPurple};
  };
`;
