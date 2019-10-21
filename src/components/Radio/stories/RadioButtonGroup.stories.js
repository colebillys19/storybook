/**
 * @description Component that renders a group of radio buttons.
 * @property onChange: (function) Callback fired when a radio button is selected.
 * @property options: (object[]) An array of objects with properties label and value.
 *          @property label: (string) The text to be used in an enclosing label element.
 *          @property value: (bool | number | string) The value of the component.
 * @property row: (bool) If true, displays the radio group in a row.
 * @property labelPlacement: ('end' | 'start' | 'top' | 'bottom') [labelPlacement='end']
 *                                                                The position of the label.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
// import { text, boolean } from '@storybook/addon-knobs';

import { RadioButtonGroup } from '../index';

const labelPlacementOptions = {
  bottom: 'bottom',
  end: 'end',
  start: 'start',
  top: 'top',
};

const labelPlacementDefault = 'end';

const labelText = 'LABEL TEXT';

const onChange = () => 'defaultOnChange';

storiesOf('Radio|RadioButtonGroup', module)
  .addParameters({ component: RadioButtonGroup })
  .addDecorator(withKnobs)
  .add('default', () => {
    const options = [
      {
        label: text('Label Text', labelText),
        value: 'label-text-1',
      },
      {
        label: text('Label Text', labelText),
        value: 'label-text-2',
      },
      {
        label: text('Label Text', labelText),
        value: 'label-text-3',
      },
    ];
    return (
      <RadioButtonGroup
        disableRipple={boolean('Disable Ripple', false)}
        labelPlacement={select('Label Placement', labelPlacementOptions, labelPlacementDefault)}
        onChange={onChange}
        options={options}
        row={boolean('Row', false)}
      />
    );
  })
  .add('disabled', () => {
    const options = [
      {
        label: text('Label Text', labelText),
        value: 'label-text-1',
      },
      {
        label: text('Label Text', labelText),
        value: 'label-text-2',
      },
      {
        label: text('Label Text', labelText),
        value: 'label-text-3',
      },
    ];
    return (
      <RadioButtonGroup
        disabled
        labelPlacement={select('Label Placement', labelPlacementOptions, labelPlacementDefault)}
        onChange={onChange}
        options={options}
        row={boolean('Row', false)}
      />
    );
  });
