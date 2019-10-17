import React from 'react';
import T from 'prop-types';

import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
} from './styles/BaseTable.styles';
import BaseTableRow from './BaseTableRow';

export default function BaseTable({
  centeredCols,
  headers,
  hoverColor,
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
    <StyledTable>
      <StyledTableHead>
        <BaseTableRow centeredCols={centeredCols} data={headers} />
      </StyledTableHead>
      <StyledTableBody hoverColor={hoverColor}>
        {rows}
      </StyledTableBody>
    </StyledTable>
  );
}

BaseTable.propTypes = {
  centeredCols: T.arrayOf(T.number),
  headers: T.arrayOf(T.string),
  hoverColor: T.string,
  rowData: T.arrayOf(T.shape({
    cells: T.arrayOf(T.string),
    id: T.string,
  })),
};
