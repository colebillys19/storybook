import styled from 'styled-components';
import { ssHoverGrey } from '../../utils/defaultStyleHelper';
import BaseLink from './BaseLink';

const GhostButtonLink = styled(BaseLink)`
  && {
    background-color: transparent;
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: ${ssHoverGrey};
    }
  }
`;

export default GhostButtonLink;
