import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { msBrightPurple } from 'utils/defaultStyleHelper';

const BaseTextField = ({ color, ...props }) => {
  const StyledTextField = styled((styledProps) => (
    <TextField
      classes={{ root: 'root' }}
      InputLabelProps={{ className: 'label' }}
      {...styledProps}
    />
  ))`
    &.root {
      div:after {
        border-bottom: 0.2rem solid ${color || msBrightPurple};
      }
      .label {
        color: #757575;
      }
    }
  `;
  return <StyledTextField color={color} {...props} />;
};

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
