import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ssMainBlue, ssMainBlueHover } from '../../../utils/defaultStyleHelper';

const StyledBaseLink = styled(Link)`
  && {
    align-items: center;
    color: ${ssMainBlue};
    display: inline-flex;
    font-size: 1.2rem;
    margin: 0.2rem 1rem;
    padding: 0;
    text-decoration: none;
    &:hover {
      color: ${ssMainBlueHover};
      text-decoration: underline;
    }
  }
`;

export default StyledBaseLink;
