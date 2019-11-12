import React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import {
  expansionPanelDividerStyle,
  msDarkGrey,
} from '../../../utils/defaultStyleHelper';

export const StyledExpansionPanel = styled((props) => (
  <ExpansionPanel classes={{ expanded: 'expanded' }} {...props} />
))`
  border-bottom: ${expansionPanelDividerStyle};
  box-shadow: none;
  &:before {
    display: none;
  }
  &.expanded {
    margin: 0;
  }
  .MuiExpansionPanelSummary-content {
    display: flex;
    align-items: baseline;
  }
  .MuiExpansionPanelSummary-root.Mui-expanded {
    min-height: 0;
  }
  .MuiExpansionPanelSummary-content.Mui-expanded {
    margin: 1.2rem 0;
  }
  .MuiExpansionPanelDetails-root {
    border-top: ${expansionPanelDividerStyle};
    padding: 2.4rem;
  }
`;

export const PrimarySummary = styled.span`
  font-size: 1.7rem;
  margin-right: 2.5rem;
`;

export const SecondarySummary = styled.span`
  color: ${msDarkGrey};
`;
