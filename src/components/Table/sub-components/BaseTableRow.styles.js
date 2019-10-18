import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const StyledTableCell = styled(TableCell)`
  font-size: 1.2rem;
  margin: 0;
  padding: 0.8rem;
  text-align: ${({ iscentered }) => iscentered ? 'center' : 'left'};
`;

export const StyledTableRow = styled(TableRow)`
  height: max-content;
`;
