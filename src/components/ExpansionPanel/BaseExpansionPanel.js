import React from 'react';
import T from 'prop-types';

import { StyledExpansionPanel } from './styles/BaseExpansionPanel.styles';

const ExpansionPanel = (props) => <StyledExpansionPanel {...props} />;

ExpansionPanel.propTypes = {
  children: T.node.isRequired,
  /**
   * If true, expands the panel by default.
   */
  defaultExpanded: T.bool,
  disabled: T.bool,
  /**
   * If true, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: T.bool,
  /**
   * Function to be run when the expand/collapse state is changed.
   */
  onChange: T.func,
};

export default ExpansionPanel;
