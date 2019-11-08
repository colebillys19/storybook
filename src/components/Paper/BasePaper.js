import React from 'react';
import T from 'prop-types';
import StyledPaper from './styles/BasePaper.styles';

/**
 * Use `BasePaper` when you need a styled card with box shadow and white background.
 */
const BasePaper = ({ children, ...restProps }) => (
  <StyledPaper {...restProps}>{children}</StyledPaper>
);

BasePaper.propTypes = {
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
   * If true, rounded corners are disabled.
   */
  square: T.bool,
};

BasePaper.defaultProps = {
  component: 'div',
  elevation: 1,
  square: false,
};

export default BasePaper;
