import React from 'react';
import moment from 'moment';
import {
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Needed to add classes to all DatePicker components
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import BaseDatePicker from '../BaseDatePicker';

afterEach(cleanup);

describe('<BaseDatePicker />', () => {
  const initialDate = new Date().toString();
  const component = (
    <BaseDatePicker
      id="test-date-picker"
      initialDate={initialDate}
    />
  );

  it('renders a single date picker', async () => {
    const { container } = render(component);
    const datePickerInput = container.querySelector('input[name="test-date-picker"]');
    expect(container.querySelector('div.SingleDatePicker_picker')).not.toBeInTheDocument();
    fireEvent.focus(datePickerInput);
    expect(container.querySelector('div.SingleDatePicker_picker')).toBeInTheDocument();
  });

  it('changes the date', () => {
    const { container } = render(component);
    const datePickerInput = container.querySelector('input[name="test-date-picker"]');
    const today = moment(initialDate).format('L');
    const tomorrow = moment(today).add(1, 'd').format('L');
    expect(datePickerInput.value).toBe(today);
    fireEvent.change(datePickerInput, { target: { value: tomorrow } });
    expect(datePickerInput.value).toBe(tomorrow);
  });

  checkBasicRendering(component);
  checkRequiredProps(component);
});
