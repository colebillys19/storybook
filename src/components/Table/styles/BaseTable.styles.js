import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

export const StyledTable = styled(Table)`
  width: max-content;
  * {
    border-bottom-style: ${({ hasBorders }) => hasBorders === false ? 'none' : null};
  }
`;

export const StyledTableBody = styled(TableBody)`
  tr:last-of-type td {
    border-bottom-style: none;
  }
`;

export const StyledTableHead = styled(TableHead)`
  th {
    font-weight: ${({ headersBold }) => headersBold ? 'bold' : null};
  }
`;
