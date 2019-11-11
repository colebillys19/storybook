import React, { useState } from 'react';
import T from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { ICON_AFTER_POSITION, ICON_BEFORE_POSITION } from 'react-dates/constants';
import { StyledWrapper } from './styles/BaseDatePicker.styles';
import ErrorLabel from './ErrorLabel';

const ControlledDatePicker = ({
  className,
  date,
  daySize,
  disabled,
  disableDayFunction,
  dispatchFunction,
  error,
  Icon,
  iconAlignRight,
  id,
  numberOfMonths,
  onChange,
  placeholder,
  renderPortal,
  styleProps,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputIconPosition = iconAlignRight ? ICON_AFTER_POSITION : ICON_BEFORE_POSITION;
  const momentDate = date ? moment(date) : null;
  return (
    <StyledWrapper className={className} error={error} {...styleProps}>
      { error && <ErrorLabel error={error} /> }
      <SingleDatePicker
        customInputIcon={Icon}
        date={momentDate}
        daySize={daySize}
        disabled={disabled}
        focused={isFocused}
        hideKeyboardShortcutsPanel
        id={id}
        inputIconPosition={inputIconPosition}
        isDayBlocked={disableDayFunction}
        numberOfMonths={numberOfMonths}
        onDateChange={(selectedDate) => onChange(selectedDate ? selectedDate.toISOString() : null)}
        onFocusChange={({ focused }) => setIsFocused(focused)}
        placeholder={placeholder}
        showDefaultInputIcon={!Icon}
        withPortal={renderPortal}
        {...restProps}
      />
    </StyledWrapper>
  );
};

ControlledDatePicker.propTypes = {
  date: T.string,
  daySize: T.number,
  disabled: T.bool,
  disableDayFunction: T.func,
  dispatchFunction: T.func,
  Icon: T.node,
  iconAlignRight: T.bool,
  id: T.string.isRequired,
  numberOfMonths: T.number,
  placeholder: T.string,
  renderPortal: T.bool,
  styleProps: T.object,
};

ControlledDatePicker.defaultProps = {
  date: null,
  daySize: 40,
  disabled: false,
  iconAlignRight: true,
  numberOfMonths: 1,
  placeholder: 'SELECT A DATE',
};

export default ControlledDatePicker;
