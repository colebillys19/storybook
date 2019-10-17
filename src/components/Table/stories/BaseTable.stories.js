/**
 * @description component description
 * @props
 * centeredCols (array) ...
 * headers (array) ...
 * isNumbered (boolean) ...
 * rows (array) ...
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, select, text } from '@storybook/addon-knobs';

import BaseTable from '../BaseTable';

storiesOf('Tables|BaseTable', module)
  .add('default', () => (
    <BaseTable
      centeredCols={centeredCols}
      headers={headers}
      rowData={rowData}
    />
  ));

const centeredCols = [];
const headers = ['', 'header one', 'header two', 'header three'];
const rowData = [
  {
    cells: ['row one', '01-01', '01-02', '01-03'],
    id: 'row-one',
  },
  {
    cells: ['row two', '02-01', '02-02', '02-03'],
    id: 'row-two',
  },
  {
    cells: ['row three', '03-01', '03-02', '03-03'],
    id: 'row-three',
  },
  {
    cells: ['row four', '04-01', '04-02', '04-03'],
    id: 'row-four',
  },
  {
    cells: ['row five', '05-01', '05-02', '05-03'],
    id: 'row-five',
  },
];
