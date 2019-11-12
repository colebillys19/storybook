import React from 'react';
import T from 'prop-types';
import uuid from 'uuid/v4';

import { StyledTableCell, StyledTableRow } from './BaseTableRow.styles';

export default function BaseTableRow({
  centeredCols,
  data,
  firstColBold,
  headersBold,
  rowHoverBackgroundColor,
  rowHoverTextColor,
}) {
  const cells = data.map((cell, i) => {
    // isCentered is passed as a number to avoid warnings/errors
    const isCentered = centeredCols && centeredCols.includes(i) ? 1 : 0;
    if (firstColBold && i === 0) {
      return (
        <StyledTableCell key={uuid()} isBold iscentered={isCentered}>
          {cell}
        </StyledTableCell>
      );
    }
    return (
      <StyledTableCell key={uuid()} iscentered={isCentered}>
        {cell}
      </StyledTableCell>
    );
  });
  return (
    <StyledTableRow
      headersBold={headersBold}
      rowHoverBackgroundColor={rowHoverBackgroundColor}
      rowHoverTextColor={rowHoverTextColor}
    >
      {cells}
    </StyledTableRow>
  );
}

BaseTableRow.propTypes = {
  centeredCols: T.arrayOf(T.number),
  data: T.arrayOf(T.string),
  firstColBold: T.bool,
  headersBold: T.bool,
  rowHoverBackgroundColor: T.string,
  rowHoverTextColor: T.string,
};
