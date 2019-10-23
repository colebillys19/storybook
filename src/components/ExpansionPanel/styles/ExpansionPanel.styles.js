import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { expansionPanelDividerStyle } from 'utils/defaultStyleHelper';

export const StyledExpansionPanel = styled(ExpansionPanel)`
  border-bottom: ${expansionPanelDividerStyle};
  box-shadow: none;
  .collapse-container {
    @media print { 
      display: block;
      height: auto;
    }
  }
  &:before {
    display: none;
  }
  &:first-child {
    border-top: ${expansionPanelDividerStyle};
  }
  &.expanded {
    margin: 0rem;
  }
`;
