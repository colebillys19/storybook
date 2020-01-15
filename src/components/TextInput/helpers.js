import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';

import { ADORNMENT_POSITION_ERROR, ICON_TEXT_ADORNMENT_ERROR } from './constants';
import TextAdornment from './adornment-components/TextAdornment';
import IconAdornment from './adornment-components/IconAdornment';

/**
 * @description: ...
 *
 * @param name {type}: ...
 *
 */
export const getAdornment = (iconAdornment, textAdornment) => {
  // if no adornment passed
  if (!iconAdornment && !textAdornment) {
    return null;
  }

  // if both adornments passed, throw error
  if (iconAdornment && textAdornment) {
    throw new Error(ICON_TEXT_ADORNMENT_ERROR);
  }

  if (iconAdornment) {
    const { position } = iconAdornment;

    // check for valid position
    if (position !== 'start' && position !== 'end') {
      throw new Error(ADORNMENT_POSITION_ERROR);
    }

    const adornment = (
      <InputAdornment position={position}>
        <IconAdornment {...iconAdornment} />
      </InputAdornment>
    );

    return { [`${position}Adornment`]: adornment };
  }


  const { onClick, position, ...textAdornmentValues } = textAdornment;

  // check for valid position
  if (position !== 'start' && position !== 'end') {
    throw new Error(ADORNMENT_POSITION_ERROR);
  }

  const adornment = (
    <InputAdornment position={position}>
      <TextAdornment
        onClick={onClick}
        position={position}
        {...textAdornmentValues}
      />
    </InputAdornment>
  );

  return { [`${position}Adornment`]: adornment };
};
