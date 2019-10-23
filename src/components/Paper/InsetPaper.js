import styled from 'styled-components';
import BasePaper from './BasePaper';
import { insetShadow } from 'utils/defaultStyleHelper';

const InsetPaper = styled(BasePaper)`
  background-color: #FBFBFB;
  box-shadow: ${insetShadow};
`;

export default InsetPaper;
