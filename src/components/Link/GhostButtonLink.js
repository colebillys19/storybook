import styled from 'styled-components';
import { greyBorder, ssGreyHover } from '../../shared/defaultStyleHelper';
import BaseLink from './BaseLink';

const GhostButtonLink = styled(BaseLink)`
  background-color: transparent;
  border-radius: 0.4rem;
  border: ${greyBorder};
  color: black;
  font-size: 1.4rem;
  padding: 1rem 2.8rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${ssGreyHover};
    color: black;
  }
`;

export default GhostButtonLink;
