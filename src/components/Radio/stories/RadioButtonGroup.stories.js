/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
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
