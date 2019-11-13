import React from 'react';

import BaseTable from '../BaseTable';
import BaseTableRow from '../sub-components/BaseTableRow';
import {
  checkBasicRendering,
  checkChildren,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

import { StyledTableBody, StyledTableHead } from '../styles/BaseTable.styles';

const headersTest = ['0', '1'];
const rowDataTest = [
  {
    cells: ['0-0', '0-1'],
    id: '0',
  },
  {
    cells: ['1-0', '1-1'],
    id: '1',
  },
];

describe('<BaseTable />', () => {
  const centeredCols = [1];
  const hoverColor = '#999';
  const tableHead = (
    <StyledTableHead>
      <BaseTableRow centeredCols={centeredCols} data={headersTest} />
    </StyledTableHead>
  );
  const rows = rowDataTest.map(({ cells, id }) => (
    <BaseTableRow key={id} centeredCols={centeredCols} data={cells} />
  ));
  const tableBody = (
    <StyledTableBody hovercolor={hoverColor}>{rows}</StyledTableBody>
  );
  const children = [tableHead, tableBody];

  /* eslint-disable react/no-children-prop */
  const component = (
    <BaseTable
      children={children}
      centeredCols={centeredCols}
      headers={headersTest}
      hoverColor={hoverColor}
      rowData={rowDataTest}
    />
  );
  /* eslint-enable react/no-children-prop */

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkChildren(component, children);
});
