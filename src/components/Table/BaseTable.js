import React from 'react';
import T from 'prop-types';
import Table from '@material-ui/core/Table';

import {
  StyledPaper,
  StyledTableBody,
  StyledTableHead,
} from './styles/BaseTable.styles';
import BaseTableRow from './BaseTableRow';

export default function BaseTable({
  centeredCols,
  headers,
  rowData,
}) {
  const rows = rowData.map(({ cells, id }) => (
    <BaseTableRow
      key={id}
      centeredCols={centeredCols}
      data={cells}
    />
  ));
  return (
    <StyledPaper>
      <Table>
        <StyledTableHead>
          <BaseTableRow centeredCols={centeredCols} data={headers} />
        </StyledTableHead>
        <StyledTableBody>
          {rows}
        </StyledTableBody>
      </Table>
    </StyledPaper>
  );
}

BaseTable.propTypes = {
  centeredCols: T.arrayOf(T.number),
  headers: T.arrayOf(T.string),
  rowData: T.arrayOf(T.shape({
    cells: T.arrayOf(T.string),
    id: T.string,
  })),
};
