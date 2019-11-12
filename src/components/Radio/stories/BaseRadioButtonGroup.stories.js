import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BaseRadioButtonGroup from '../BaseRadioButtonGroup';
import BaseRadioButtonGroupDocs from '../docs/BaseRadioButtonGroup.docs.mdx';

const labelPlacementOptions = {
  bottom: 'bottom',
  end: 'end',
  start: 'start',
  top: 'top',
};

export default {
  decorators: [withKnobs],
  parameters: { component: BaseRadioButtonGroup, docs: { page: BaseRadioButtonGroupDocs } },
  title: 'Miscellaneous|BaseRadioButtonGroup',
};

export const defaultStory = () => {
  const options = [
    {
      disabled: boolean('Option 1 Disabled', false),
      label: text('Option 1 Text', 'Option 1 Text'),
      value: 'label-text-1',
    },
    {
      disabled: boolean('Option 2 Disabled', false),
      label: text('Option 2 Text', 'Option 2 Text'),
      value: 'label-text-2',
    },
    {
      disabled: boolean('Option 3 Disabled', false),
      label: text('Option 3 Text', 'Option 3 Text'),
      value: 'label-text-3',
    },
  ];
  return (
    <BaseRadioButtonGroup
      disableRipple={boolean('Disable Ripple', false)}
      labelPlacement={select(
        'Label Placement',
        labelPlacementOptions,
        'end',
      )}
      onChange={action('onChange')}
      options={options}
      row={boolean('Row', false)}
      selected="label-text-1"
    />
  );
};

defaultStory.story = { name: 'default' };
