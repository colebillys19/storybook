/**
 *
 * ShowPasswordIcon
 * @description: Eye Icon in the PasswordInput. Controls the password visibility
 * Use Case: Used as InputProp for BasePasswordInput Component
 *
 */

import React from 'react';
import T from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import iconDictionary from '../../../utils/iconDictionary';
import ConditionalRender from '../../../utils/ConditionalRender';

import { StyledPasswordIcon } from './ShowPasswordIcon.styles';

const Visibility = iconDictionary('visibility', 'mediumSmall', 'passwordIcon');
const VisibilityOff = iconDictionary('visibilityOff', 'mediumSmall', 'passwordIcon');

const ShowPasswordIcon = ({ handleClick, showPassword }) => (
  <InputAdornment position="end">
    <StyledPasswordIcon
      aria-label="Toggle Password Visibility"
      onClick={handleClick}
    >
      <ConditionalRender
        Component={Visibility}
        FallbackComponent={VisibilityOff}
        shouldRender={showPassword}
      />
    </StyledPasswordIcon>
  </InputAdornment>
);

ShowPasswordIcon.propTypes = {
  handleClick: T.func.isRequired,
  showPassword: T.bool.isRequired,
};

export default ShowPasswordIcon;
