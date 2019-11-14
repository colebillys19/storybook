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
    hideKeyboardShortcutsPanel: boolean('Hide Keyboard Shortcuts', true),
    id: 'date-picker',
    numberOfMonths: select('Number of Months', numberOfMonthsOptions, 1),
    onChange: setDate,
    placeholder: text('Placeholder Text', 'SELECT A DATE'),
    withPortal: boolean('With Portal', false),
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
  title: 'Miscellaneous|BaseDatePicker',
};

/* eslint-disable react/destructuring-assignment */
export const defaultStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      daySize={select('Calendar Size', daySizeOptions, 40)}
      disabled={boolean('Disabled', false)}
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
      daySize={select('Calendar Size', daySizeOptions, 40)}
      disabled={boolean('Disabled', false)}
      {...setProps}
    />
  );
};

withInitialDateStory.story = { name: 'with intial date' };

export const withErrorStory = () => {
  const StoryContainer = styled.div` padding-top: 1.5rem; `;
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <StoryContainer>
      <BaseDatePicker
        daySize={select('Calendar Size', daySizeOptions, 40)}
        disabled={boolean('Disabled', false)}
        error={text('Error Text', 'error text')}
        {...setProps}
      />
    </StoryContainer>
  );
};

withErrorStory.story = { name: 'with error' };

export const focusedStory = () => {
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      daySize={select('Calendar Size', daySizeOptions, 40)}
      focused
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
  const checkBlocked = (dayA) => (
    datesList.some((dayB) => dayA.format('YMD') === dayB.format('YMD'))
  );
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <BaseDatePicker
      daySize={select('Calendar Size', daySizeOptions, 40)}
      disabled={boolean('Disabled', false)}
      focused
      isDayBlocked={checkBlocked}
      {...setProps}
    />
  );
};

withBlockedDaysStory.story = { name: 'with blocked days' };

export const anchorRightStory = () => {
  const StoryContainer = styled.div` padding-left: 14.4rem; `;
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <StoryContainer>
      <BaseDatePicker
        anchorLeft={boolean('Anchor Left', false)}
        daySize={select('Calendar Size', daySizeOptions, 40)}
        focused
        {...setProps}
      />
    </StoryContainer>
  );
};

anchorRightStory.story = { name: 'anchor right' };

export const openUpStory = () => {
  const StoryContainer = styled.div` padding-top: 32.7rem; `;
  const [date, setDate] = props.useDate();
  const setProps = props.set(date, setDate);
  return (
    <StoryContainer>
      <BaseDatePicker
        daySize={40}
        focused
        openUp={boolean('Open Up', true)}
        {...setProps}
      />
    </StoryContainer>
  );
};

openUpStory.story = { name: 'open up' };
/* eslint-enable react/destructuring-assignment */
