import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const StyledPaper = styled(Paper)`
  width: ${({ width }) => width || 'max-content'};
`;

export default StyledPaper;
