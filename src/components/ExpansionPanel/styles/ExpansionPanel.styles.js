import styled from 'styled-components';
import { ExpansionPanelSummary } from 'components/base_ui/ExpansionPanel';


export const PanelSummary = styled(ExpansionPanelSummary)`
  &.expanded {
    min-height: 4.8rem;
    .content {
      margin: 1.2rem 0rem;
    }
  }
`;

export const ViewWrapper = styled.div`
  margin: ${({ margin }) => margin || '1rem 1rem'};
`;
