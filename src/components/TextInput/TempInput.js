import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const TempInput = () => {
  const [values, setValues] = useState({ password: '', showPassword: false });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        edge="end"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {values.showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <TextField
      id="outlined-adornment-password"
      InputProps={{ endAdornment }}
      labelWidth={70}
      onChange={handleChange('password')}
      type={values.showPassword ? 'text' : 'password'}
      value={values.password}
    />
  );
};

export default TempInput;
