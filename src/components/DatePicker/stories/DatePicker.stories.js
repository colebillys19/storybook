/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BaseDatePicker from '../BaseDatePicker';
import BaseDatePickerDocs from '../docs/BaseDatePicker.docs.mdx';
import { colorOptions } from '../../../utils/storyConstants';

const initialDate = new Date();

const defaultDatePlaceholder = 'SELECT A DATE';

const defaultColor = colorOptions.ssMainBlue;

const numberOfMonthsOptions = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
};
const defaultNumberofMonths = 1;

const daySizeOptions = {
  small: 30,
  // eslint-disable-next-line sort-keys
  default: 40,
  large: 60,
  xlarge: 80,
};
const daySizeDefault = 40;

const props = {
  set: () => ({
    color: select('Color', colorOptions, defaultColor),
    daySize: select('Calendar Size', daySizeOptions, daySizeDefault),
    id: 'date-picker',
    numberOfMonths: select('Number of Months', numberOfMonthsOptions, defaultNumberofMonths),
    placeholder: text('Placeholder Text', defaultDatePlaceholder),
  }),
};

export default {
  decorators: [withKnobs],
  parameters: { component: BaseDatePicker, docs: { page: BaseDatePickerDocs } },
  title: 'DatePicker|BaseDatePicker',
};

export const defaultStory = () => {
  const setProps = props.set();
  return (
    <BaseDatePicker
      {...setProps}
    />
  );
};

defaultStory.story = { name: 'default' };

export const initialDateStory = () => {
  const setProps = props.set();
  return (
    <BaseDatePicker
      initialDate={initialDate}
      {...setProps}
    />
  );
};

initialDateStory.story = { name: 'with intial date' };

export const disabledStory = () => {
  const setProps = props.set();
  return (
    <BaseDatePicker
      disabled
      {...setProps}
    />
  );
};

disabledStory.story = { name: 'disabled' };

export const focusedStory = () => {
  const setProps = props.set();
  return (
    <BaseDatePicker
      focused
      {...setProps}
    />
  );
};

focusedStory.story = { name: 'focused' };


export const portalStory = () => {
  const setProps = props.set();
  return (
    <BaseDatePicker
      renderPortal
      {...setProps}
    />
  );
};

portalStory.story = { name: 'portal' };

export const keyBoardShortcutsPanelStory = () => {
  const setProps = props.set();
  return (
    <BaseDatePicker
      hideKeyboardShortcutsPanel={false}
      {...setProps}
    />
  );
};

keyBoardShortcutsPanelStory.story = { name: 'with keyboard shortcuts panel' };
