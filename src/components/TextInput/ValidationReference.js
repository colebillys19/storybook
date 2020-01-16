import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = { inputRef: PropTypes.func.isRequired };

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
    <FormControl>
      <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
      <Input
        id="formatted-text-mask-input"
        inputComponent={TextMaskCustom}
        onChange={handleChange('textmask')}
        value={values.textmask}
      />
    </FormControl>
  );
}
