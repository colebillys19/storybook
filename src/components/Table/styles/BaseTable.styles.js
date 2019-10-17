import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

export const StyledPaper = styled(Paper)`
  width: max-content;
`;

export const StyledTableBody = styled(TableBody)`
  tr:hover {
    background-color: #F9F9F9;
  }
`;

export const StyledTableHead = styled(TableHead)`
  th {
    font-weight: bold;
  }
`;
