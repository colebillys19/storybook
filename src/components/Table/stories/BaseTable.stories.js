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
import { withKnobs, text } from '@storybook/addon-knobs';

import BaseTable from '../BaseTable';

import {
  HEADERS_A,
  HEADERS_B,
  ROWDATA_A,
  ROWDATA_B,
} from '../constants';

const centeredColsA = [1, 2, 3, 4];
const centeredColsB = [];

storiesOf('Tables|BaseTable', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <BaseTable
      centeredCols={text('Centered Columns', centeredColsA)}
      headers={HEADERS_A}
      rowData={ROWDATA_A}
    />
  ))
  .add('offset', () => (
    <BaseTable
      centeredCols={text('Centered Columns', centeredColsB)}
      headers={HEADERS_B}
      rowData={ROWDATA_B}
    />
  ));
