import React from 'react';
import T from 'prop-types';

import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
} from './styles/BaseTable.styles';
import BaseTableRow from './sub-components/BaseTableRow';

const BaseTable = ({
  centeredCols,
  firstColBold,
  hasBorders,
  headers,
  headersBold,
  rowData,
  rowHoverBackgroundColor,
  rowHoverTextColor,
}) => {
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
      firstColBold={firstColBold}
      rowHoverBackgroundColor={rowHoverBackgroundColor}
      rowHoverTextColor={rowHoverTextColor}
    />
  ));
  return (
    <StyledTable hasBorders={hasBorders}>
      <StyledTableHead headersBold={headersBold}>
        <BaseTableRow
          centeredCols={centeredCols}
          data={headers}
          firstColBold={firstColBold}
        />
      </StyledTableHead>
      <StyledTableBody>
        {rows}
      </StyledTableBody>
    </StyledTable>
  );
};

BaseTable.propTypes = {
  /**
   * Array containing the indices of columns whose content is to be centered.
   */
  centeredCols: T.arrayOf(T.number),
  /**
   * If true, text in the table's first column will appear bold.
   */
  firstColBold: T.bool,
  /**
   * If true, the table has a border between each row.
   */
  hasBorders: T.bool,
  /**
   * Array containing strings to be used as the table's column headers
   */
  headers: T.arrayOf(T.string).isRequired,
  /**
   * If true, the table headers appear bold.
   */
  headersBold: T.bool,
  /**
   * Array of objects containing row cells arrays (arrays of strings) and row IDs (strings).
   */
  rowData: T.arrayOf(
    T.shape({
      cells: T.arrayOf(T.string),
      id: T.string,
    })
  ).isRequired,
  /**
   * Row background color on hover.
   */
  rowHoverBackgroundColor: T.string,
  /**
   * Row text color on hover.
   */
  rowHoverTextColor: T.string,
};

BaseTable.defaultProps = {
  centeredCols: [],
  firstColBold: false,
  hasBorders: true,
  headersBold: true,
  rowHoverBackgroundColor: '',
  rowHoverTextColor: '',
};

export default BaseTable;
