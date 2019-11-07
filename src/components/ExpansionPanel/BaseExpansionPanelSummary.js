import React from 'react';
import T from 'prop-types';

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const BaseExpansionPanelSummary = ({
  children,
  iconProps,
  ...restProps
}) => (
  <ExpansionPanelSummary IconButtonProps={iconProps} {...restProps}>
    {children}
  </ExpansionPanelSummary>
);

// Need this for Material UI composition
// https://material-ui.com/guides/composition/
BaseExpansionPanelSummary.muiName = ExpansionPanelSummary.muiName;

BaseExpansionPanelSummary.propTypes = {
  children: T.node,
  iconProps: T.object,
};

export default BaseExpansionPanelSummary;
