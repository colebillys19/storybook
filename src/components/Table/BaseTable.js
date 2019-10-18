import React from 'react';
import T from 'prop-types';

import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
} from './styles/BaseTable.styles';
import BaseTableRow from './sub-components/BaseTableRow';

export default function BaseTable({
  centeredCols,
  headers,
  hoverColor,
  rowData,
}) {
  const headersLen = headers.length;
  const lengthCheck = rowData.every(({ cells }) => cells.length === headersLen);
  if (!lengthCheck) {
    // eslint-disable-next-line
    console.error(
      'Component BaseTable expects headers and row cells arrays to be of equal length.'
    );
    return null;
  }
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
      <StyledTableBody hovercolor={hoverColor}>
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
