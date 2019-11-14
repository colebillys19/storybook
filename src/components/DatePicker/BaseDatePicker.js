import React, { useState } from 'react';
import T from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
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
import ErrorLabel from './sub-components/ErrorLabel';
import iconDictionary from '../../utils/iconDictionary';
import { msBrightPurple } from '../../utils/defaultStyleHelper';

const BaseDatePicker = ({
  anchorLeft,
  className,
  color,
  date,
  daySize,
  disabled,
  display,
  error,
  hideKeyboardShortcutsPanel,
  iconAlignRight,
  id,
  isDayBlocked,
  numberOfMonths,
  onChange,
  openUp,
  placeholder,
  styleProps,
  withPortal,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputIconPosition = iconAlignRight ? ICON_AFTER_POSITION : ICON_BEFORE_POSITION;
  const anchorDirection = anchorLeft ? ANCHOR_LEFT : ANCHOR_RIGHT;
  const openDirection = openUp ? OPEN_UP : OPEN_DOWN;
  return (
    <StyledWrapper className={className} color={color} {...styleProps}>
      { error && <ErrorLabel error={error} /> }
      <SingleDatePicker
        anchorDirection={anchorDirection}
        customInputIcon={iconDictionary('calendar', 'mediumSmall')}
        date={date}
        daySize={daySize}
        disabled={disabled}
        focused={isFocused}
        hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
        id={id}
        inputIconPosition={inputIconPosition}
        isDayBlocked={isDayBlocked}
        navNext={iconDictionary('arrowRight', 'medium')}
        navPrev={iconDictionary('arrowLeft', 'medium')}
        numberOfMonths={numberOfMonths}
        onDateChange={(selectedDate) => onChange(selectedDate)}
        onFocusChange={({ focused }) => setIsFocused(focused)}
        openDirection={openDirection}
        placeholder={placeholder}
        withPortal={withPortal}
        {...restProps}
      />
    </StyledWrapper>
  );
};

BaseDatePicker.propTypes = {
  /**
   * If true, the calendar's left border will align with the input's left border.
   */
  anchorLeft: T.bool,
  /**
   * Color of the main picker elements.
   * Note that this prop will not affect colors in the portal calendar,
   * adjust those style's manually in globalStyle.
   */
  color: T.string,
  /**
   * Moment object or null.
   */
  date: T.oneOfType([momentPropTypes.momentObj, T.instanceOf(null)]),
  /**
   * The size of the individual days in the calendar in pixels.
   */
  daySize: T.number,
  /**
   * If true, the input will be disabled.
   */
  disabled: T.bool,
  /**
   * Error label text.
   */
  error: T.oneOfType([T.bool, T.string]),
  /**
   * If true, keyboard shortcuts button will be hidden from corner of calendar.
   */
  hideKeyboardShortcutsPanel: T.bool,
  /**
   * Aligns the icon to the right of the input.
   */
  iconAlignRight: T.bool,
  /**
   * Id passed as the name attribute to the input.
   */
  id: T.string.isRequired,
  /**
   * This function will be passed a moment object for each date on the displayed calendar.
   * If the function returns true, that date will be blocked.
   */
  isDayBlocked: T.func,
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
  /**
   * Styles to pass to wrapper.
   */
  styleProps: T.object,
  /**
   * If true, calendar will open independently as a modal.
   */
  withPortal: T.bool,
};

BaseDatePicker.defaultProps = {
  anchorLeft: true,
  color: msBrightPurple,
  daySize: 40,
  disabled: false,
  hideKeyboardShortcutsPanel: true,
  iconAlignRight: true,
  numberOfMonths: 1,
  placeholder: 'SELECT A DATE',
};

export default BaseDatePicker;
