import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

export const StyledTable = styled(Table)`
  width: max-content;
`;

export const StyledTableBody = styled(TableBody)`
  tr:hover {
    background-color: ${({ hoverColor }) => hoverColor || ''};
  }
`;

export const StyledTableHead = styled(TableHead)`
  th {
    font-weight: bold;
  }
`;
