import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { action } from '@storybook/addon-actions';
import {
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import { useDateRange } from '../hooks';
import { initialDate } from '../../../utils/storyConstants';

export default {
  decorators: [withKnobs],
  parameters: { component: DateRangePicker },
  title: 'DatePicker|DateRangePicker',
};


export const defaultStory = () => {
  // const [startDate, endDate, handleDateChange] = useDateRange(initialDate, initialDate);
  // const [focus, handleFocusChange] = React.useState(false);
  return (
    <DateRangePicker
      endDate={null}
      endDateId="date-range-end-date"
      focusedInput={null}
      initialVisibleMonth={() => moment().add(2, "M")}
      onDatesChange={action('handleDateChane')}
      onFocusChange={action('onFocusChange')}
      startDate={null}
      startDateId="date-range-start-date"
    />
  );
};
