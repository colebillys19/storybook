import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import uuid from 'uuid/v4';

import {
  ADORNMENT_POSITION_ERROR,
  ICON_TEXT_ADORNMENT_ERROR,
  INVALID_TYPE_ERROR,
  NO_ID_ERROR,
} from './constants';
import { errorRed, msBrightPurple } from '../../utils/defaultStyleHelper';
import { IconAdornment, TextAdornment } from './sub-components';

/**
 * getAdornment
 * @description: assembles adornment content based on object passed
 *
 * @param iconAdornment {object}: contains values used to assemble icon adornment
 * @param textAdornment {object}: contains values used to assemble text adornment
 *
 */
export const getAdornment = (iconAdornment, textAdornment, variant) => {
  if (!iconAdornment && !textAdornment) {
    return null;
  }

  const adornmentComponent = iconAdornment ? (
    <IconAdornment variant={variant} {...iconAdornment} />
  ) : (
    <TextAdornment variant={variant} {...textAdornment} />
  );

  const { position } = iconAdornment || textAdornment;

  const adornment = (
    <InputAdornment classes={{ root: 'adornment-root' }} position={position}>
      {adornmentComponent}
    </InputAdornment>
  );

  return { [`${position}Adornment`]: adornment };
};

/**
 * validateProps
 * @description: ensures props passed to BaseTextInput are valid
 *               more robust prop type check...
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

  const typeOptions = ['number', 'password', 'search', 'text'];

  if (!id) {
    throw new Error(NO_ID_ERROR);
  }

  if (typeOptions.indexOf(type) === -1) {
    throw new Error(INVALID_TYPE_ERROR);
  }

  if (iconAdornment && textAdornment) {
    throw new Error(ICON_TEXT_ADORNMENT_ERROR);
  }

  if (
    (iconAdornment && iconAdornment.position !== 'start' && iconAdornment.position !== 'end') ||
    (textAdornment && textAdornment.position !== 'start' && textAdornment.position !== 'end')
  ) {
    throw new Error(ADORNMENT_POSITION_ERROR);
  }
};

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
  const isSearchValue = searchValues && searchValues.indexOf(currentValue) !== -1;

  const datalist = searchValues && !isSearchValue ? (
    <datalist id="datalist-id">
      {searchValues.map((value) => <option key={`${value}${uuid()}`} value={value} />)}
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
