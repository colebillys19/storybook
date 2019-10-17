// isCentered is passed as a number to avoid warnings/errors

import React from 'react';
import T from 'prop-types';
import uuid from 'uuid/v4';

import { StyledTableCell, StyledTableRow } from './styles/BaseTableRow.styles';

export default function BaseTableRow({ centeredCols, data }) {
  const cells = data.map((cell, i) => {
    const isCentered = centeredCols.length && centeredCols.includes(i) ? 1 : 0;
    return <StyledTableCell key={uuid()} iscentered={isCentered}>{cell}</StyledTableCell>;
  });
  return (
    <StyledTableRow>
      {cells}
    </StyledTableRow>
  );
}

BaseTableRow.propTypes = { centeredCols: T.arrayOf(T.number), data: T.arrayOf(T.string) };
