/**
 * @description
 * - simple, no frills table
 * - takes in data in the form of string arrays, which are mapped to the table
 * - ensure that the length of headers and row arrays are equal
 * - see data shape below
 * @props
 * > centeredCols (array, optional)
 *   - array of numbers representing the indeces of columns whose content is centered
 * > headers (array)
 *   - array of strings respresenting column headers
 * > hoverColor (string, optional)
 *   - color value determining row background color on hover
 * > rowData (array)
 *   - array of objects containing:
 *     > cells (array)
 *       - array of strings representing row cell values
 *     > id (string)
 *       - unique id to be used when mapping rows
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import BaseTable from '../BaseTable';

const centeredColsA = [1, 2, 3, 4];
const centeredColsB = [1, 2, 3];
const hoverColor = '#F8F8F8';

storiesOf('Tables|BaseTable', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <BaseTable
      centeredCols={text('Centered Columns', centeredColsA)}
      headers={headersA}
      hoverColor={text('Row Hover Color', hoverColor)}
      rowData={rowDataA}
    />
  ))
  .add('offset', () => (
    <BaseTable
      centeredCols={text('Centered Columns', centeredColsB)}
      headers={headersB}
      hoverColor={text('Row Hover Color', hoverColor)}
      rowData={rowDataB}
    />
  ));

// data
export const headersA = ['Dessert', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)'];
export const rowDataA = [
  {
    cells: ['Cupcake', '305', '4', '67', '4'],
    id: 'cupcake',
  },
  {
    cells: ['Eclair', '262', '16', '24', '6'],
    id: 'eclair',
  },
  {
    cells: ['Gingerbread', '356', '16', '49', '4'],
    id: 'gingerbread',
  },
  {
    cells: ['Ice Cream', '207', '11', '24', '4'],
    id: 'ice-cream',
  },
];

export const headersB = ['', 'column one', 'column two', 'column three'];
export const rowDataB = [
  {
    cells: ['row one', '01-01', '01-02', '01-03'],
    id: '1',
  },
  {
    cells: ['row two', '02-01', '02-02', '02-03'],
    id: '2',
  },
  {
    cells: ['row three', '03-01', '03-02', '03-03'],
    id: '3',
  },
  {
    cells: ['row four', '04-01', '04-02', '04-03'],
    id: '4',
  },
  {
    cells: ['row five', '05-01', '05-02', '05-03'],
    id: '5',
  },
];
