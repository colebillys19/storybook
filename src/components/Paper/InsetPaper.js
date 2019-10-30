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
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: T.string,
  /**
   * Shadow depth, corresponds to dp in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: T.number,
  /**
   * The ref forwarded to the root element.
   */
  ref: T.oneOfType([
    T.func,
    T.shape({ current: T.any }),
  ]),
  /**
   * If true, rounded corners are disabled.
   */
  square: T.bool,
};

InsetPaper.defaultProps = {
  component: 'div',
  elevation: 1,
  square: false,
};

export default InsetPaper;
