/**
*
* ExpansionPanelSummary
* @description Expansion panel sub-component that displays summary component/text
* Use Case : Render the headers / visible text in any expansion panel
*/

import React from 'react';
import T from 'prop-types';
import PanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ExpansionPanelSummary = ({
  children,
  classes,
  expandIcon,
  iconProps,
  ...restProps
}) => (
  <PanelSummary
    classes={classes}
    expandIcon={expandIcon}
    IconButtonProps={iconProps}
    {...restProps}
  >
    {children}
  </PanelSummary>
);

// Need this for Material UI composition
// https://material-ui.com/guides/composition/
ExpansionPanelSummary.muiName = PanelSummary.muiName;

ExpansionPanelSummary.propTypes = {
  children: T.node,
  classes: T.object,
  expandIcon: T.element,
  iconProps: T.object,
};

export default ExpansionPanelSummary;
