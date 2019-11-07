import React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { expansionPanelDividerStyle } from '../../../utils/defaultStyleHelper';

export const StyledExpansionPanel = styled((props) => (
  <ExpansionPanel classes={{ expanded: 'expanded' }} {...props} />
))`
  border-bottom: ${expansionPanelDividerStyle};
  box-shadow: none;
  & :before {
    display: none;
  }
  &.expanded {
    margin: 0;
  }
  .MuiExpansionPanelSummary-content {
    display: flex;
    align-items: center;
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

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: #f0f0f0;
  border: 0.2rem solid #1f1f1f;
  display: flex;
  margin-right: 2rem;
`;
