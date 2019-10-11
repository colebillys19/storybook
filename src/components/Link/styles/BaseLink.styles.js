import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ssMainBlue, ssMainBlueHover } from '../../../shared/defaultStyleHelper';

const StyledBaseLink = styled(Link)`
  color: ${ssMainBlue};
  font-size: 1.2rem;
  margin: 0.2rem 1rem;
  padding: 0;
  &:hover {
    color: ${ssMainBlueHover};
  }
`;

export default StyledBaseLink;
