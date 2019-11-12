import React from 'react';
import T from 'prop-types';

import { ContentWrapper, StyledListItem } from './styles/BaseListItem.styles';

const BaseListItem = ({ bullet, children, ...restProps }) => (
  <StyledListItem bullet={bullet} {...restProps}>
    {bullet ? <ContentWrapper>{children}</ContentWrapper> : children}
  </StyledListItem>
);

BaseListItem.propTypes = {
  /**
   * If true, item will be rendered with a bullet point.
   */
  bullet: T.bool,
  /**
   * If true, the list item will be a button.
   */
  button: T.bool,
  children: T.node.isRequired,
  disabled: T.bool,
  /**
   * If true, a 1px light border is added to the bottom of the list item.
   */
  divider: T.bool,
  selected: T.bool,
};

BaseListItem.defaultProps = {
  bullet: false,
  button: false,
  disabled: false,
  divider: false,
  selected: false,
};

export default BaseListItem;
