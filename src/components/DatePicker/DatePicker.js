import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { ICON_AFTER_POSITION, ICON_BEFORE_POSITION } from 'react-dates/constants';
import { StyledWrapper } from './styles/DatePicker.styles';

const DatePicker = ({
  className,
  daySize,
  disabled,
  disableDayFunction,
  dispatchFunction,
  Icon,
  iconAlignRight,
  id,
  initialDate,
  numberOfMonths,
  placeholder,
  renderPortal,
  ...restProps
}) => {
  const [date, setDate] = useState(initialDate ? moment(initialDate) : null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (dispatchFunction) {
      const dateString = date ? date.toISOString() : null;
      dispatchFunction(dateString);
    }
  }, [date]);
  const inputIconPosition = iconAlignRight ? ICON_AFTER_POSITION : ICON_BEFORE_POSITION;
  return (
    <StyledWrapper className={className}>
      <SingleDatePicker
        customInputIcon={Icon}
        date={date}
        daySize={daySize}
        disabled={disabled}
        focused={isFocused}
        hideKeyboardShortcutsPanel
        id={id}
        inputIconPosition={inputIconPosition}
        isDayBlocked={disableDayFunction}
        numberOfMonths={numberOfMonths}
        onDateChange={(selectedDate) => setDate(selectedDate)}
        onFocusChange={({ focused }) => setIsFocused(focused)}
        placeholder={placeholder}
        showDefaultInputIcon={!Icon}
        withPortal={renderPortal}
        {...restProps}
      />
    </StyledWrapper>
  );
};

DatePicker.propTypes = {
  daySize: T.number,
  disabled: T.bool,
  disableDayFunction: T.func,
  dispatchFunction: T.func,
  Icon: T.node,
  iconAlignRight: T.bool,
  id: T.string.isRequired,
  initialDate: T.string,
  numberOfMonths: T.number,
  placeholder: T.string,
  renderPortal: T.bool,
};

DatePicker.defaultProps = {
  daySize: 40,
  disabled: false,
  iconAlignRight: true,
  numberOfMonths: 1,
  placeholder: 'SELECT A DATE',
};

export default DatePicker;
