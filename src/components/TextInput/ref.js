import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      isNumericString
      onValueChange={(values) => { onChange({ target: { value: values.value } }); }}
      prefix="$"
      thousandSeparator
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    numberformat: '1320',
    textmask: '(1  )    -    ',
  });

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  return (
    <TextField
      id="formatted-numberformat-input"
      InputProps={{ inputComponent: NumberFormatCustom }}
      label="react-number-format"
      onChange={handleChange('numberformat')}
      value={values.numberformat}
    />
  );
}
