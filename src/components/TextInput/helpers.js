import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';

import {
  ADORNMENT_POSITION_ERROR,
  ICON_TEXT_ADORNMENT_ERROR,
  INVALID_TYPE_ERROR,
  NO_ID_ERROR,
} from './constants';
import { errorRed, msBrightPurple } from '../../utils/defaultStyleHelper';
import TextAdornment from './adornment-components/TextAdornment';
import IconAdornment from './adornment-components/IconAdornment';

/**
 * getAdornment
 * @description: assembles adornment content based on object passed
 *
 * @param iconAdornment {object}: contains values used to assemble icon adornment
 * @param textAdornment {object}: contains values used to assemble text adornment
 *
 */
export const getAdornment = (iconAdornment, textAdornment) => {
  // if no adornment passed
  if (!iconAdornment && !textAdornment) {
    return null;
  }

  const adornmentComponent = iconAdornment ? (
    <IconAdornment {...iconAdornment} />
  ) : (
    <TextAdornment {...textAdornment} />
  );

  const { position } = iconAdornment || textAdornment;

  const adornment = (
    <InputAdornment position={position}>
      {adornmentComponent}
    </InputAdornment>
  );

  return { [`${position}Adornment`]: adornment };
};

/**
 * validateProps
 * @description: ensures props passed to BaseTextInput are valid
 *
 * @param props {object}: BaseTextInput props
 *
 */
export const validateProps = (props) => {
  const {
    iconAdornment,
    id,
    textAdornment,
    type,
  } = props;

  const typeOpts = ['email', 'number', 'password', 'search', 'text'];

  if (!id) {
    throw new Error(NO_ID_ERROR);
  }

  if (!typeOpts.includes(type)) {
    throw new Error(INVALID_TYPE_ERROR);
  }

  if (iconAdornment && textAdornment) {
    throw new Error(ICON_TEXT_ADORNMENT_ERROR);
  }

  if (iconAdornment && iconAdornment.position !== 'start' && iconAdornment.position !== 'end') {
    throw new Error(ADORNMENT_POSITION_ERROR);
  }

  if (textAdornment && textAdornment.position !== 'start' && textAdornment.position !== 'end') {
    throw new Error(ADORNMENT_POSITION_ERROR);
  }
};

/**
 * getRandomNumber
 * @description: produces random 10 digit number
 */
export const getRandomNumber = () => Math.random() * 10000000000;

/**
 * getDatalist
 * @description: assembles datalist element based on search values passed, provides relevant props
 *               to pass to input element
 *
 * @param searchValues {array}: strings to be mapped as options for the datalist element
 * @param currentValue {string}: current value of text input
 *
 */
export const getDatalist = (searchValues, currentValue) => {
  // don't show options if current value is one of the options
  const isSearchValue = searchValues && searchValues.includes(currentValue);

  const datalist = searchValues && !isSearchValue ? (
    <datalist id="datalist-id">
      {searchValues.map((value) => <option key={`${value}${getRandomNumber()}`} value={value} />)}
    </datalist>
  ) : null;

  const searchProps = searchValues && !isSearchValue ? {
    list: 'datalist-id',
    type: 'search',
  } : null;

  return { datalist, searchProps };
};


/**
 * getBorderColor
 * @description: used with BaseTextInput styles to determine border color
 */
export const getBorderColor = (color, error) => {
  if (error) {
    return errorRed;
  }
  if (color) {
    return color;
  }
  return msBrightPurple;
};
