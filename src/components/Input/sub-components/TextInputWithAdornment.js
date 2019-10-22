import React from 'react';
import T from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextInput from '../TextInput';

const TextInputWithAdornment = ({
  adornmentComponent,
  InputProps,
  position,
  ...restProps
}) => {
  const adornment = { [`${position}Adornment`]: <InputAdornment position={position}>{adornmentComponent}</InputAdornment> };
  return (
    <TextInput
      InputProps={{ ...adornment, ...InputProps }}
      {...restProps}
    />
  );
};

TextInputWithAdornment.defaultProps = { position: 'start' };

TextInputWithAdornment.propTypes = {
  adornmentComponent: T.node.isRequired,
  InputProps: T.object,
  position: T.oneOf([
    'end',
    'start',
  ]),
};

export default TextInputWithAdornment;