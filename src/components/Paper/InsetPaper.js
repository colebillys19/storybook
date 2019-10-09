import styled from 'styled-components';
import BasePaper from './BasePaper';
import { insetshadow } from '../../shared/defaultStyleHelper';

const InsetPaper = styled(BasePaper)`
  background-color: #FBFBFB;
  box-shadow: ${insetshadow};
`;

export default InsetPaper;
