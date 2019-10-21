import React from 'react';
import T from 'prop-types';

import { StyledTextField } from './styles/TextField.styles';

const BaseTextField = ({ color, ...props }) => <StyledTextField color={color} {...props} />;

BaseTextField.propTypes = {
  color: T.string,
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

BaseTextField.defaultProps = {
  disabled: false,
  type: 'text',
};

export default BaseTextField;
