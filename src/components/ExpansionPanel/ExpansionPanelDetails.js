import React from 'react';
import T from 'prop-types';
import PanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ExpansionPanelDetails = ({
  children,
  classes,
  ...restProps
}) => (
  <PanelDetails
    classes={classes}
    {...restProps}
  >
    {children}
  </PanelDetails>
);

// Need this for Material UI composition
// https://material-ui.com/guides/composition/
ExpansionPanelDetails.muiName = PanelDetails.muiName;

ExpansionPanelDetails.propTypes = {
  children: T.node,
  classes: T.object,
};

export default ExpansionPanelDetails;
