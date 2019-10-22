import React from 'react';
import T from 'prop-types';

import { StyledExpansionPanel } from './styles/ExpansionPanel.styles';

const ExpansionPanel = ({
  children,
  classes,
  ...restProps
}) => (
  <StyledExpansionPanel
    classes={Object.assign({ expanded: 'expanded' }, classes)}
    CollapseProps={{ classes: { container: 'collapse-container' } }}
    square
    {...restProps}
  >
    {children}
  </StyledExpansionPanel>
);

ExpansionPanel.propTypes = {
  children: T.node.isRequired,
  classes: T.object,
  defaultExpanded: T.bool,
  disabled: T.bool,
  expanded: T.bool,
  onChange: T.func,
  TransitionComponent: T.element,
  TransitionProps: T.object,
};

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false,
};

export default ExpansionPanel;
