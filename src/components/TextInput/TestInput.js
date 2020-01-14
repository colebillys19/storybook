import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';

import { StyledTextField } from './styles/TestInput.styles';
import {
  ADORNMENT_POSITION_ERROR,
  ICON_TEXT_ADORNMENT_ERROR,
  SEARCH_DATALIST_ERROR,
} from './constants';
import TextAdornment from './adornment-components/TextAdornment';
import TextButtonAdornment from './adornment-components/TextButtonAdornment';

export default function TestInput({
  datalistId,
  iconAdornment,
  InputProps,
  textAdornment,
  type,
  ...props
}) {
  if (type === 'search' && !datalistId) {
    throw new Error(SEARCH_DATALIST_ERROR);
  }
  if (iconAdornment && textAdornment) {
    throw new Error(ICON_TEXT_ADORNMENT_ERROR);
  }

  //

  //

  //

  if (textAdornment) {
    const { onClick, position, ...textAdornmentValues } = textAdornment;

    //

    if (position !== 'start' && position !== 'end') {
      throw new Error(ADORNMENT_POSITION_ERROR);
    }

    //

    if (onClick) {
      const adornment = (
        <InputAdornment position={position}>
          <TextButtonAdornment
            onClick={onClick}
            position={position}
            {...textAdornmentValues}
          />
        </InputAdornment>
      );

      const adornmentProp = { [`${position}Adornment`]: adornment };

      return (
        <StyledTextField
          InputProps={{
            classes: { input: 'input' },
            ...adornmentProp,
            ...InputProps,
          }}
          variant="outlined"
          {...props}
        />
      );
    }

    //

    const adornment = (
      <InputAdornment position={position}>
        <TextAdornment position={position} {...textAdornmentValues} />
      </InputAdornment>
    );

    const adornmentProp = { [`${position}Adornment`]: adornment };

    return (
      <StyledTextField
        InputProps={{
          classes: { input: 'input' },
          ...adornmentProp,
          ...InputProps,
        }}
        variant="outlined"
        {...props}
      />
    );
  }

  //
  return (
    <StyledTextField
      InputProps={{
        classes: { input: 'input' },
        ...InputProps,
      }}
      variant="outlined"
      {...props}
    />
  );
}
