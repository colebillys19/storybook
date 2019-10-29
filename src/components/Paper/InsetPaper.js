import T from 'prop-types';
import styled from 'styled-components';
import BasePaper from './BasePaper';
import { insetShadow } from '../../utils/defaultStyleHelper';

const InsetPaper = styled(BasePaper)`
  background-color: #FBFBFB;
  box-shadow: ${insetShadow};
`;

InsetPaper.propTypes = {
/**
 * The content of the component.
 */
  children: T.node,
};

export default InsetPaper;
