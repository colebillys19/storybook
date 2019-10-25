import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import BaseTable from 'components/Table/BaseTable';

const centeredColsA = [1, 2, 3, 4];
const centeredColsB = [1, 2, 3];
const hoverColor = '#F8F8F8';

export default {
  decorators: [withKnobs],
  excludeStories: ['headersA', 'rowDataA', 'headersB', 'rowDataB'],
  parameters: { component: BaseTable },
  title: 'Tables|BaseTable',
};

export const defaultStory = () => (
  <BaseTable
    centeredCols={text('Centered Columns', centeredColsA)}
    headers={headersA}
    hoverColor={text('Row Hover Color', hoverColor)}
    rowData={rowDataA}
  />
);

defaultStory.story = { name: 'default' };

export const offset = () => (
  <BaseTable
    centeredCols={text('Centered Columns', centeredColsB)}
    headers={headersB}
    hoverColor={text('Row Hover Color', hoverColor)}
    rowData={rowDataB}
  />
);

offset.story = { name: 'offset' };

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
