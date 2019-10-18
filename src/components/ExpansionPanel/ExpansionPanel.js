/**
*
* ExpansionPanel
* @description Expansion panel component that displays summary component/text which on click
* can expand to display additional details component/text
* Use Case : Expansion panel receives several headers representing types and you want to display
* information related to each type only when it's selected / clicked on.
*/

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
  children: T.node,
  classes: T.object,
};

export default ExpansionPanel;
