import React from 'react';
import T from 'prop-types';

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const Details = ({ children, ...restProps }) => (
  <ExpansionPanelDetails {...restProps}>{children}</ExpansionPanelDetails>
);

// Need this for Material UI composition
// https://material-ui.com/guides/composition/
Details.muiName = ExpansionPanelDetails.muiName;

Details.propTypes = { children: T.node };

export default Details;
