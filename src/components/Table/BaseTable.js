/**
 * @description ...
 * @props
 *   centeredCols (array) columns whose content should be centered
 *   firstColBold (boolean) determines whether or not first column is bold
 *   headers (array) strings representing table headers
 *   hoverColor (string) background color on row hover
 *   rowData (array) array of of objects containing:
 *     - cells (array) array of strings that will populate cells
 *     - id (string) unique id
 */

import React from 'react';
import T from 'prop-types';

import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
} from './styles/BaseTable.styles';
import BaseTableRow from './sub-components/BaseTableRow';

/**
 * Use `BaseTable` to display a set of data.
 */
const BaseTable = ({
  centeredCols,
  firstColBold,
  headers,
  hoverColor,
  rowData,
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
    />
  ));
  return (
    <StyledTable>
      <StyledTableHead>
        <BaseTableRow
          centeredCols={centeredCols}
          data={headers}
          firstColBold={firstColBold}
        />
      </StyledTableHead>
      <StyledTableBody hovercolor={hoverColor}>
        {rows}
      </StyledTableBody>
    </StyledTable>
  );
}

BaseTable.propTypes = {
  /**
   * Columns whose content should be centered.
   */
  centeredCols: T.arrayOf(T.number),
  /**
   * The content of the table, normally TableHead and TableBody.
   */
  children: T.element,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: T.element,
  /**
   * If true, the first column will be bold.
   */
  firstColBold: T.bool,
  /**
   * Strings representing table headers.
   */
  headers: T.arrayOf(T.string),
  /**
   * Background color on row hover.
   */
  hoverColor: T.string,
  /**
   * Allows TableCells to inherit padding of the Table.
   */
  padding: T.oneOf(['default', 'checkbox', 'none']),
  /**
   * Array of of objects containing properties "cells" (an array of strings
   * that will populate cells and "id" (string), unique id.
   */
  rowData: T.arrayOf(T.shape({
    cells: T.arrayOf(T.string),
    id: T.string,
  })),
  /**
   * Allows TableCells to inherit size of the Table.
   */
  size: T.oneOf(['small', 'medium']),
  /**
   * Set the header sticky.
   */
  stickyHeader: T.bool,
};

export default BaseTable;
