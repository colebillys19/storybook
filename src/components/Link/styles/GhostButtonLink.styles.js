import styled from 'styled-components';

import BaseLink from '../BaseLink';
import { msHoverGrey } from '../../../utils/defaultStyleHelper';

export const StyledGhostButtonLink = styled(BaseLink)`
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 0.6rem 1.4rem;
  text-align: center;
  &:hover {
    background-color: ${msHoverGrey};
    text-decoration: none;
  }
`;
