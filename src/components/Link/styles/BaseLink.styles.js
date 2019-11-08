import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { muiBlue } from '../../../utils/defaultStyleHelper';

const StyledBaseLink = styled(Link)`
  align-items: center;
  color: ${muiBlue};
  display: inline-flex;
  padding: 0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledBaseLink;
