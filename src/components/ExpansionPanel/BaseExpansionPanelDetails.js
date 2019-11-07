import React from 'react';
import T from 'prop-types';

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const BaseExpansionPanelDetails = ({ children, ...restProps }) => (
  <ExpansionPanelDetails {...restProps}>
    {children}
  </ExpansionPanelDetails>
);

// Need this for Material UI composition
// https://material-ui.com/guides/composition/
BaseExpansionPanelDetails.muiName = ExpansionPanelDetails.muiName;

BaseExpansionPanelDetails.propTypes = { children: T.node };

export default BaseExpansionPanelDetails;
