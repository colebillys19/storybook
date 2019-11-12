import React from 'react';
import T from 'prop-types';

import {
  PrimarySummary,
  StyledExpansionPanel,
  SecondarySummary,
} from './styles/BaseExpansionPanel.styles';
import ExpansionPanelSummary from './sub-components/ExpansionPanelSummary';
import ExpansionPanelDetails from './sub-components/ExpansionPanelDetails';
import iconDictionary from '../../utils/iconDictionary';

const ExpansionPanel = (props) => {
  const {
    content,
    primarySummaryText,
    secondarySummaryText,
    ...restProps
  } = props;
  return (
    <StyledExpansionPanel {...restProps}>
      <ExpansionPanelSummary expandIcon={iconDictionary('arrowDown', 'medium')}>
        <PrimarySummary>{primarySummaryText}</PrimarySummary>
        <SecondarySummary>{secondarySummaryText}</SecondarySummary>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{content}</ExpansionPanelDetails>
    </StyledExpansionPanel>
  );
};

ExpansionPanel.propTypes = {
  /**
   * The content you wish to be displayed when the panel is expanded.
   */
  content: T.oneOfType([T.element, T.node, T.number, T.string]).isRequired,
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
  /**
   * The prominent text to be displayed in the panel summary.
   */
  primarySummaryText: T.string.isRequired,
  /**
   * Secondary text to be displayed in the panel summary.
   */
  secondarySummaryText: T.string,
};

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false,
};

export default ExpansionPanel;
