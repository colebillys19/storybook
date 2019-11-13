import React, { useState } from 'react';
import T from 'prop-types';
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
import ErrorLabel from './ErrorLabel';

const BaseDatePicker = ({
  anchorLeft,
  className,
  color,
  date,
  daySize,
  disabled,
  disableDayFunction,
  dispatchFunction,
  display,
  error,
  Icon,
  iconAlignRight,
  id,
  numberOfMonths,
  onChange,
  openUp,
  placeholder,
  renderPortal,
  styleProps,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputIconPosition = iconAlignRight ? ICON_AFTER_POSITION : ICON_BEFORE_POSITION;
  const anchorDirection = anchorLeft ? ANCHOR_RIGHT : ANCHOR_LEFT;
  const openDirection = openUp ? OPEN_UP : OPEN_DOWN;
  return (
    <StyledWrapper className={className} color={color} {...styleProps}>
      { error && <ErrorLabel error={error} /> }
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
        onDateChange={(selectedDate) => onChange(selectedDate)}
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
  /**
   * Moment object or null.
   */
  date: T.string,
  /**
   * Size of the date picker.
   */
  daySize: T.number,
  /**
   * If true, the input will be disabled.
   */
  disabled: T.bool,
  disableDayFunction: T.func,
  dispatchFunction: T.func,
  /**
   * Error label text.
   */
  error: T.oneOfType(T.bool, T.string),
  /**
   * If provided, will render icon.
   */
  Icon: T.node,
  /**
   * Aligns the icon to the right of the input.
   */
  iconAlignRight: T.bool,
  /**
   * Id passed as the name attribute to the input.
   */
  id: T.string.isRequired,
  /**
   * Number of months to render on focus.
   */
  numberOfMonths: T.number,
  /**
   * Function to run on date change.
   */
  onChange: T.func.isRequired,
  /**
   * Placeholder label.
   */
  placeholder: T.string,
  renderPortal: T.bool,
  /**
   * Styles to pass to wrapper.
   */
  styleProps: T.object,
};

BaseDatePicker.defaultProps = {
  daySize: 40,
  disabled: false,
  iconAlignRight: true,
  numberOfMonths: 1,
  placeholder: 'SELECT A DATE',
};

export default BaseDatePicker;
