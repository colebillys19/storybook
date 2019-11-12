import React from 'react';

import BaseTable from '../BaseTable';
import BaseTableRow from '../sub-components/BaseTableRow';
import {
  checkBasicRendering,
  checkChildren,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

import { HEADERS_TEST, ROWDATA_TEST } from '../constants';

import { StyledTableBody, StyledTableHead } from '../styles/BaseTable.styles';

describe('<BaseTable />', () => {
  const centeredCols = [1];
  const hoverColor = '#999';
  const tableHead = (
    <StyledTableHead>
      <BaseTableRow centeredCols={centeredCols} data={HEADERS_TEST} />
    </StyledTableHead>
  );
  const rows = ROWDATA_TEST.map(({ cells, id }) => (
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
      headers={HEADERS_TEST}
      hoverColor={hoverColor}
      rowData={ROWDATA_TEST}
    />
  );
  /* eslint-enable react/no-children-prop */

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkChildren(component, children);
});
