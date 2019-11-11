import React from 'react';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BaseDatePicker from '../BaseDatePicker';
import BaseDatePickerDocs from '../docs/BaseDatePicker.docs.mdx';
import {
  colorOptions,
  defaultDatePlaceholder,
  initialDate,
} from '../../../utils/storyConstants';

const defaultColor = colorOptions.ssMainBlue;

export default {
  decorators: [withKnobs],
  parameters: { component: BaseDatePicker, docs: { page: BaseDatePickerDocs } },
  title: 'DatePicker|BaseDatePicker',
};

export const defaultStory = () => (
  <BaseDatePicker
    color={select('Color', colorOptions)}
    id="default-datepicker"
    placeholder={text('Placeholder Text', defaultDatePlaceholder)}
  />
);

defaultStory.story = { name: 'default' };

export const initialDateStory = () => (
  <BaseDatePicker
    color={select('Color', colorOptions, defaultColor)}
    id="initial-date"
    initialDate={initialDate}
  />
);

initialDateStory.story = { name: 'with intial date' };

export const disabledStory = () => (
  <BaseDatePicker
    color={select('Color', colorOptions, defaultColor)}
    disabled
    id="disabled"
  />
)

disabledStory.story = { name: 'disabled' };
