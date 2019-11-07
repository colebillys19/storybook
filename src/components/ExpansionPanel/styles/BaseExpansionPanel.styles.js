import React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { expansionPanelDividerStyle } from '../../../utils/defaultStyleHelper';

export const StyledExpansionPanel = styled((props) => (
  <ExpansionPanel classes={{ expanded: 'expanded' }} {...props} />
))`
  border-bottom: ${expansionPanelDividerStyle};
  box-shadow: none;
  &:before {
    display: none;
  }
  &:first-child {
    border-top: ${expansionPanelDividerStyle};
  }
  & .expanded {
    margin: 0;
  }
`;

export const StyledExpansionPanelSummary = styled((props) => (
  <ExpansionPanelSummary classes={{ content: 'content' }} {...props} />
))`
  & .content {
    display: flex;
    align-items: center;
  }
`;

export const WithImageContentWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: #f0f0f0;
  border: 0.2rem solid #1f1f1f;
  display: flex;
  margin-right: 2rem;
`;
