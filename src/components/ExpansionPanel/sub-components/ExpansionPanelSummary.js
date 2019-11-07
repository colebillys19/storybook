import React from 'react';
import T from 'prop-types';

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const Summary = ({
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
Summary.muiName = ExpansionPanelSummary.muiName;

Summary.propTypes = {
  children: T.node,
  iconProps: T.object,
};

export default Summary;
