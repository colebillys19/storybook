import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import {
  ANCHOR_LEFT,
  ANCHOR_RIGHT,
  ICON_AFTER_POSITION,
  ICON_BEFORE_POSITION,
  OPEN_DOWN,
  OPEN_UP,
} from 'react-dates/constants';
import { StyledWrapper } from './styles/BaseDatePicker.styles';

const BaseDatePicker = ({
  anchorLeft,
  className,
  color,
  daySize,
  disabled,
  disableDayFunction,
  dispatchFunction,
  display,
  Icon,
  iconAlignRight,
  id,
  initialDate,
  numberOfMonths,
  openUp,
  placeholder,
  renderPortal,
  ...restProps
}) => {
  const [date, setDate] = useState(initialDate ? moment(initialDate) : null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (dispatchFunction) {
      const dateString = date ? date.string() : null;
      dispatchFunction(dateString);
    }
  }, [date]);
  const inputIconPosition = iconAlignRight ? ICON_AFTER_POSITION : ICON_BEFORE_POSITION;
  const anchorDirection = anchorLeft ? ANCHOR_RIGHT : ANCHOR_LEFT;
  const openDirection = openUp ? OPEN_UP : OPEN_DOWN;
  return (
    <StyledWrapper className={className} color={color}>
      <SingleDatePicker
        anchorDirection={anchorDirection}
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
        openDirection={openDirection}
        placeholder={placeholder}
        showDefaultInputIcon={!Icon}
        withPortal={renderPortal}
        {...restProps}
      />
    </StyledWrapper>
  );
};

BaseDatePicker.propTypes = {
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

BaseDatePicker.defaultProps = {
  daySize: 40,
  disabled: false,
  iconAlignRight: true,
  numberOfMonths: 1,
  placeholder: 'SELECT A DATE',
};

export default BaseDatePicker;
