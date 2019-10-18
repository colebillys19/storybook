/**
*
* TextField
* @description: Create input with type text
* Use Case: When a controlled text input is needed
* Parent Components/Containers: [
*   {
*     route: /queryBuilder,
*     name: <LiveSearch>, <NumberPickerRange>,
*   },
* ]
*/

import React from 'react';
import T from 'prop-types';
import TextField from '@material-ui/core/TextField';


const TextFieldTemplate = (props) => (
  <TextField {...props} />
);

TextFieldTemplate.propTypes = {
  className: T.string,
  defaultValue: T.oneOfType([T.string, T.number, T.bool]),
  disabled: T.bool,
  errorStyle: T.object,
  errorText: T.node,
  floatingLabelStyle: T.object,
  floatingLabelText: T.string,
  hintStyle: T.object,
  hintText: T.string,
  id: T.string,
  inputStyle: T.object,
  name: T.string,
  onChange: T.func.isRequired,
  style: T.object,
  type: T.string,
  underlineShow: T.bool,
  value: T.oneOfType([T.string, T.number, T.bool]),
};

TextFieldTemplate.defaultProps = {
  disabled: false,
  type: 'text',
  underlineShow: true,
};

export default TextFieldTemplate;
