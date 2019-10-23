import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { msBrightPurple } from 'utils/defaultStyleHelper';

const StyledBaseLink = styled(Link)`
  && {
    align-items: center;
    color: ${msBrightPurple};
    display: inline-flex;
    font-size: 1.2rem;
    margin: 0.2rem 1rem;
    padding: 0;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledBaseLink;
