/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import useState from 'storybook-addon-state';
import {
  boolean,
  color,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BaseDatePicker from '../BaseDatePicker';
import BaseDatePickerDocs from '../docs/BaseDatePicker.docs.mdx';
import { msBrightPurple } from '../../../utils/defaultStyleHelper';

const numberOfMonthsOptions = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
};

/* eslint-disable sort-keys */
const daySizeOptions = {
  small: 30,
  medium: 40,
  large: 60,
  xLarge: 80,
};
/* eslint-enable sort-keys */

const props = {
  set: (date, setDate) => ({
    color: color('Color', msBrightPurple),
    date,
    daySize: select('Calendar Size', daySizeOptions, 40),
    id: 'date-picker',
    numberOfMonths: select('Number of Months', numberOfMonthsOptions, 1),
    onChange: setDate,
    placeholder: text('Placeholder Text', 'SELECT A DATE'),
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
      disabled={boolean('Disabled', false)}
      hideKeyboardShortcutsPanel={boolean('Hide Keyboard Shortcuts', true)}
      iconAlignRight={boolean('Align Icon Right', true)}
      withPortal={boolean('With Portal', false)}
      {...setProps}
    />
  );
};

defaultStory.story = { name: 'default' };

export const withInitialDateStory = () => {
  const [date, setDate] = props.useDate(new Date());
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      disabled={boolean('Disabled', false)}
      hideKeyboardShortcutsPanel={boolean('Hide Keyboard Shortcuts', true)}
      iconAlignRight={boolean('Align Icon Right', true)}
      withPortal={boolean('With Portal', false)}
      {...setProps}
    />
  );
};

withInitialDateStory.story = { name: 'with intial date' };

export const withErrorStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <div style={{ marginTop: 30 }}>
      <BaseDatePicker
        disabled={boolean('Disabled', false)}
        error={text('Error Text', 'error text')}
        hideKeyboardShortcutsPanel={boolean('Hide Keyboard Shortcuts', true)}
        iconAlignRight={boolean('Align Icon Right', true)}
        withPortal={boolean('With Portal', false)}
        {...setProps}
      />
    </div>
  );
};

withErrorStory.story = { name: 'with error' };

export const focusedStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      focused
      hideKeyboardShortcutsPanel={boolean('Hide Keyboard Shortcuts', true)}
      iconAlignRight={boolean('Align Icon Right', true)}
      withPortal={boolean('With Portal', false)}
      {...setProps}
    />
  );
};

focusedStory.story = { name: 'focused' };

export const withBlockedDaysStory = () => {
  const datesList = [
    moment().add(1, 'days'),
    moment().add(3, 'days'),
    moment().add(5, 'days'),
    moment().add(7, 'days'),
  ];
  const isSameDay = (a, b) => {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    return a.date() === b.date()
      && a.month() === b.month()
      && a.year() === b.year();
  };
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      disabled={boolean('Disabled', false)}
      focused
      hideKeyboardShortcutsPanel={boolean('Hide Keyboard Shortcuts', true)}
      iconAlignRight={boolean('Align Icon Right', true)}
      isDayBlocked={(day1) => datesList.some((day2) => isSameDay(day1, day2))}
      withPortal={boolean('With Portal', false)}
      {...setProps}
    />
  );
};

withBlockedDaysStory.story = { name: 'with blocked days' };

export const anchorRightStory = () => {
  const StoryContainer = styled.div`padding-left: 10.6rem;`;
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <StoryContainer>
      <BaseDatePicker
        anchorLeft={boolean('Anchor Left', false)}
        focused
        hideKeyboardShortcutsPanel={boolean('Hide Keyboard Shortcuts', true)}
        iconAlignRight={boolean('Align Icon Right', true)}
        withPortal={boolean('With Portal', false)}
        {...setProps}
      />
    </StoryContainer>
  );
};

anchorRightStory.story = { name: 'anchor right' };

export const openUpStory = () => {
  const StoryContainer = styled.div`padding-top: 32.6rem;`;
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <StoryContainer>
      <BaseDatePicker
        focused
        hideKeyboardShortcutsPanel={boolean('Hide Keyboard Shortcuts', true)}
        iconAlignRight={boolean('Align Icon Right', true)}
        openUp={boolean('Open Up', true)}
        withPortal={boolean('With Portal', false)}
        {...setProps}
      />
    </StoryContainer>
  );
};

openUpStory.story = { name: 'open up' };
