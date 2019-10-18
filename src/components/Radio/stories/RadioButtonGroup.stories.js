/**
 * Label position
 * @typedef {"end" | "start" | "top" | "bottom"} LabelPosition
 */


/**
 * @description Component that renders a group of radio buttons
 * @props
 * onChange: (function) Callback fired when a radio button is selected
 * options: (object[]) An array of objects with properties label and value
 *          label: (string) The text to be used in an enclosing label element
 *          value: (bool|number|string) The value of the component
 * row: (bool) If true, displays the radio group in a row
 * labelPlacement: (string) LabelPosition
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { text, boolean } from '@storybook/addon-knobs';

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
