import React from 'react';
import T from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

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
    <Paper>
      <Table size="small">
        <TableHead>
          <BaseTableRow centeredCols={centeredCols} data={headers} />
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </Paper>
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
