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
  defaultValue: T.oneOfType([T.string, T.number, T.bool]),
  disabled: T.bool,
  id: T.string,
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
};

export default TextFieldTemplate;
