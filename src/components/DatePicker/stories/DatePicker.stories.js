/* eslint-disable react/destructuring-assignment */
import React from 'react';
import moment from 'moment';
import useState from 'storybook-addon-state';
import centered from '@storybook/addon-centered/react';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BaseDatePicker from '../BaseDatePicker';
import BaseDatePickerDocs from '../docs/BaseDatePicker.docs.mdx';
import {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  muiBlue,
  ssDarkBlue,
  ssMainBlue,
  ssYellow,
} from '../../../utils/defaultStyleHelper';

const defaultDatePlaceholder = 'SELECT A DATE';

const colorOptions = {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  muiBlue,
  ssDarkBlue,
  ssMainBlue,
  ssYellow,
};
const defaultColor = ssMainBlue;

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
  set: (date, setDate) => ({
    color: select('Color', colorOptions, defaultColor),
    date,
    daySize: select('Calendar Size', daySizeOptions, daySizeDefault),
    id: 'date-picker',
    numberOfMonths: select('Number of Months', numberOfMonthsOptions, defaultNumberofMonths),
    onChange: setDate,
    placeholder: text('Placeholder Text', defaultDatePlaceholder),
  }),
  useDate: (initialDate) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState('date', initialDate ? moment(initialDate) : null);
    return [date, setDate];
  },
};

export default {
  decorators: [withKnobs],
  parameters: { component: BaseDatePicker, docs: { page: BaseDatePickerDocs } },
  title: 'DatePicker|BaseDatePicker',
};

export const defaultStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      {...setProps}
    />
  );
};

defaultStory.story = { name: 'default' };

export const initialDateStory = () => {
  const [date, setDate] = props.useDate(new Date());
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      {...setProps}
    />
  );
};

initialDateStory.story = { name: 'with intial date' };

export const disabledStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      disabled
      {...setProps}
    />
  );
};

disabledStory.story = { name: 'disabled' };

export const errorStory = () => (
  <BaseDatePicker
    error={text('Error', 'Error Text')}
  />
);

errorStory.story = { decorators: [centered], name: 'error' };

export const focusedStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      focused
      {...setProps}
    />
  );
};

focusedStory.story = { name: 'focused' };

export const portalStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      renderPortal
      {...setProps}
    />
  );
};

portalStory.story = { name: 'portal' };

export const keyBoardShortcutsPanelStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      hideKeyboardShortcutsPanel={false}
      {...setProps}
    />
  );
};

keyBoardShortcutsPanelStory.story = { name: 'with keyboard shortcuts panel' };

export const anchorLeftStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      anchorLeft={boolean('Anchor Left', true)}
      focused
      {...setProps}
    />
  );
};

anchorLeftStory.story = { decorators: [centered], name: 'anchor left' };

export const openUpStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      focused
      openUp={boolean('Open Up', true)}
      {...setProps}
    />
  );
};

openUpStory.story = { decorators: [centered], name: 'open up' };

export const alignLeftStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      iconAlignRight={boolean('Align Left', false)}
      {...setProps}
    />
  );
};

alignLeftStory.story = { name: 'align left' };
