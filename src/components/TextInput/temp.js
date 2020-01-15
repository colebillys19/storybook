import React from 'react';
import T from 'prop-types';

import TextAdornment from './adornment-components/TextAdornment';
import { ICON_TEXT_ADORNMENT_ERROR, SEARCH_DATALIST_ERROR } from './constants';
import {
  StyledAdornment,
  StyledInput,
  WithIconAdornment,
  WithIconButtonAdornment,
  WithTextAdornment,
  WithTextButtonAdornment,
} from './styles/temp';

const BaseTextInput = ({
  adornmentPlacement,
  datalistId,
  iconAdornment,
  textAdornment,
  type,
  ...props
}) => { // eslint-disable-line
  // ********************************************************************************
  if (type === 'search' && !datalistId) {
    throw new Error(SEARCH_DATALIST_ERROR);
  }

  // ********************************************************************************
  if (iconAdornment && textAdornment) {
    throw new Error(ICON_TEXT_ADORNMENT_ERROR);
  }

  // ********************************************************************************
  if (iconAdornment) {
    if (iconAdornment.onClick) {
      // render IconButton containing IconDictionary component @ mediumSmall size
      return (
        <WithIconButtonAdornment />
      );
    }

    // render IconDictionary component @ mediumSmall size
    return (
      <WithIconAdornment />
    );
  }

  // ********************************************************************************
  if (textAdornment) {
    const {
      font,
      onClick,
      size,
      text,
      weight,
    } = textAdornment;

    // ******************************
    if (onClick) {
      // render TextButton containing Typography component
      return (
        <WithTextButtonAdornment />
      );
    }

    // ******************************
    const adornment = (
      <StyledAdornment adornmentPlacement={adornmentPlacement} position="start">
        <TextAdornment
          font={font}
          size={size}
          text={text}
          weight={weight}
        />
      </StyledAdornment>
    );

    const adornmentProp = { [`${adornmentPlacement}Adornment`]: adornment };

    // render Typography component
    return (
      <WithTextAdornment
        adornmentPlacement={adornmentPlacement}
        {...adornmentProp}
        {...props}
      />
    );
  }

  // ********************************************************************************
  return <StyledInput {...props} />;
};

BaseTextInput.propTypes = {
  /** Determines whether the adornment is placed and the start or end of the input. */
  adornmentPlacement: T.oneOf(['start', 'end']),

  /** This prop helps users to fill forms faster, especially on mobile devices. (e.g. name, email,
    * tel, etc.)
    */
  autoComplete: T.string,

  /** If true, the input element will be focused during the first mount. */
  autoFocus: T.bool,

  /** Override or extend the styles applied to the component. See CSS API below for more details. */
  classes: T.object,

  /** The CSS class name of the wrapper element. */
  className: T.string,

  /** The color of the input border on focus. */
  color: T.string,

  /** The id of the associated <datalist /> element. If 'search' is passed as the type prop, the
    * input needs to be associated with a <datalist /> element containing search suggestions as
    * nested <option /> elements.
    */
  datalistId: T.string,

  /** The default input element value. Use when the component is not controlled. */
  defaultValue: T.any,

  /** If true, the input element will be disabled. */
  disabled: T.bool,

  /** If true, the input will indicate an error. */
  error: T.bool,

  /** If true, the input will take up the full width of its container. */
  fullWidth: T.bool,

  /** Icon to be displayed as adornment. Accepts an object containing an IconDictionary component
    * and an optional onClick handler. If onClick is provided, an icon button will be rendered.
    */
  iconAdornment: T.shape({ IconDictionaryComponent: T.node }),

  /** The id of the input element. Ensure the input label's 'for' attribute has a matching value. */
  id: T.string.isRequired,

  /** Attributes applied to the input element. Ensure the 'aria-describedby' string matches the
    * helper text element's 'id' attribute.
    */
  inputProps: T.object,

  /** Pass a ref to the input element. */
  inputRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),

  /** Name attribute of the input element. */
  name: T.string,

  /** Callback fired when the input is blurred. Notice that the first argument (event) might be
    * undefined.
    */
  onBlur: T.func,

  /** Callback fired when the value is changed. */
  onChange: T.func,

  /** The short hint displayed in the input before the user enters a value. */
  placeholder: T.string,

  /** It prevents the user from changing the value of the field (not from interacting with the
    * field).
    */
  readOnly: T.bool,

  /** If true, the input element will be required. */
  required: T.bool,

  /** Text to be displayed as adornment. Accepts an object containing text, font, size, & weight
    * values - as well as an optional onClick handler. If onClick is provided, an text button will
    * be rendered. Ensure font/weight passed are available globally.
    */
  textAdornment: T.shape({
    font: T.string,
    size: T.string,
    text: T.string,
    weight: T.string,
  }),

  /** Specifies the type attribute passed to the underlying input element. Accepts one of the
    * following: email, number, search, tel, text (default), or url. Note that if 'search' is
    * passed, you'll need to pass a datalistId prop as well.
    */
  type: T.oneOf(['email', 'number', 'search', 'tel', 'text', 'url']),

  /** The value of the input element, required for a controlled component. */
  value: T.any,
};

BaseTextInput.defaultProps = {
  adornmentPlacement: 'start',
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  inputProps: {},
  readOnly: false,
  required: false,
  type: 'text',
};

export default BaseTextInput;
