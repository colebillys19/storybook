import React from 'react';
import T from 'prop-types';

import { StyledExpansionPanelSummary } from '../styles/BaseExpansionPanel.styles';

const ExpansionPanelSummary = ({
  children,
  iconProps,
  ...restProps
}) => (
  <StyledExpansionPanelSummary IconButtonProps={iconProps} {...restProps}>
    {children}
  </StyledExpansionPanelSummary>
);

// Need this for Material UI composition
// https://material-ui.com/guides/composition/
ExpansionPanelSummary.muiName = StyledExpansionPanelSummary.muiName;

ExpansionPanelSummary.propTypes = {
  children: T.node,
  classes: T.object,
  expandIcon: T.element,
  iconProps: T.object,
};

export default ExpansionPanelSummary;
