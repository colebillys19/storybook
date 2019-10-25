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
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import RadioButtonGroup from 'components/Radio/RadioButtonGroup';

const labelPlacementOptions = {
  bottom: 'bottom',
  end: 'end',
  start: 'start',
  top: 'top',
};

const labelPlacementDefault = 'end';

const labelText = 'LABEL TEXT';

const onChange = () => 'defaultOnChange';

export default {
  decorators: [withKnobs],
  parameters: { component: RadioButtonGroup },
  title: 'Radio|RadioButtonGroup',
};

export const defaultStory = () => {
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
      onChange={action('onChange')}
      options={options}
      row={boolean('Row', false)}
    />
  );
};

defaultStory.story = { name: 'default' };

export const disabledStory = () => {
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
};

disabledStory.story = { name: 'disabled' };
