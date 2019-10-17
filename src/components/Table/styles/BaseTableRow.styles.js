import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';

const StyledTableCell = styled(TableCell)`
  text-align: ${({ iscentered }) => iscentered === 1 ? 'center' : ''};
`;

export { StyledTableCell };
