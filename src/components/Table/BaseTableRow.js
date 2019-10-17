// isCentered is passed as a number to avoid warnings/errors

import React from 'react';
import T from 'prop-types';
import uuid from 'uuid/v4';
import TableRow from '@material-ui/core/TableRow';

import { StyledTableCell } from './styles/BaseTableRow.styles';

export default function BaseTableRow({ centeredCols, data }) {
  const cells = data.map((cell, i) => {
    const isCentered = centeredCols.includes(i) ? 0 : 1;
    return <StyledTableCell key={uuid()} iscentered={isCentered}>{cell}</StyledTableCell>;
  });
  return (
    <TableRow>
      {cells}
    </TableRow>
  );
}

BaseTableRow.propTypes = { centeredCols: T.arrayOf(T.number), data: T.arrayOf(T.string) };
