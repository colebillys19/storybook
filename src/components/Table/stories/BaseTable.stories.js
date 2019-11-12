import React from 'react';
import {
  boolean,
  color,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import BaseTable from '../BaseTable';
import BaseTableDocs from '../docs/BaseTable.docs.mdx';

export default {
  decorators: [withKnobs],
  excludeStories: ['headersA', 'rowDataA', 'headersB', 'rowDataB'],
  parameters: { component: BaseTable, docs: { page: BaseTableDocs } },
  title: 'Miscellaneous|BaseTable',
};

export const defaultStory = () => (
  <BaseTable
    centeredCols={text('Centered Columns', [1, 2, 3, 4])}
    firstColBold={boolean('First Column Bold', false)}
    hasBorders={boolean('Borders', true)}
    headers={headersA}
    headersBold={boolean('Headers Bold', true)}
    rowData={rowDataA}
    rowHoverBackgroundColor={color('Row Background Hover Color', '')}
    rowHoverTextColor={color('Row Text Hover Color', '')}
  />
);

defaultStory.story = { name: 'default' };

export const offsetStory = () => (
  <BaseTable
    centeredCols={text('Centered Columns', [1, 2, 3, 4])}
    firstColBold={boolean('First Column Bold', true)}
    hasBorders={boolean('Borders', true)}
    headers={headersB}
    headersBold={boolean('Headers Bold', true)}
    rowData={rowDataB}
    rowHoverBackgroundColor={color('Row Background Hover Color', '')}
    rowHoverTextColor={color('Row Text Hover Color', '')}
  />
);

offsetStory.story = { name: 'offset' };

export const minimalStory = () => (
  <BaseTable
    centeredCols={text('Centered Columns', [])}
    firstColBold={boolean('First Column Bold', false)}
    hasBorders={boolean('Borders', false)}
    headers={headersC}
    headersBold={boolean('Headers Bold', false)}
    rowData={rowDataC}
    rowHoverBackgroundColor={color('Row Background Hover Color', '')}
    rowHoverTextColor={color('Row Text Hover Color', '')}
  />
);

minimalStory.story = { name: 'minimal' };

// data
const headersA = [
  'Dessert',
  'Calories',
  'Fat (g)',
  'Carbs (g)',
  'Protein (g)',
];
const rowDataA = [
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

const headersB = ['', 'Jessica', 'Adam', 'Sarah', 'Mike'];
const rowDataB = [
  {
    cells: ['Monday', '-', '-', 'L', 'L'],
    id: '1',
  },
  {
    cells: ['Tuesday', 'L', '-', '-', '-'],
    id: '2',
  },
  {
    cells: ['Wednesday', '-', '-', 'S', '-'],
    id: '3',
  },
  {
    cells: ['Thursday', '-', '-', '-', '-'],
    id: '4',
  },
  {
    cells: ['Friday', 'S', 'A', '-', 'V'],
    id: '5',
  },
];

const headersC = ['A', 'B', 'C', 'D'];
const rowDataC = [
  {
    cells: ['E', 'F', 'G', 'H'],
    id: '1',
  },
  {
    cells: ['I', 'J', 'K', 'L'],
    id: '2',
  },
  {
    cells: ['M', 'N', 'O', 'P'],
    id: '3',
  },
];
