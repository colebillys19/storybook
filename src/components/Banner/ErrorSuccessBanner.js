/**
 * ErrorBanner
 * @description: ...
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import iconDictionary from 'utils/iconDictionary';
import { errorRed, successGreen } from 'utils/defaultStyleHelper';
import {
  BannerWrapper,
  CloseButton,
  Text,
  IconWrapper,
} from './styles/ErrorSuccessBanner.styles';

const CloseIcon = iconDictionary('closeMenu', 'small');
const SuccessIcon = iconDictionary('successOutline', 'mediumSmall');
const WarningIcon = iconDictionary('warning', 'mediumSmall');

const ErrorSuccessBanner = ({
  error,
  onClose,
  success,
  ...restProps
}) => {
  const isErrorSuccess = success || error;
  const [displayState, setDisplayState] = useState(!!isErrorSuccess);
  useEffect(() => setDisplayState(!!isErrorSuccess), [isErrorSuccess]);

  const handleClose = () => {
    setDisplayState(false);
    if (onClose) {
      const field = error ? 'error' : 'success';
      onClose(field);
    }
  };

  // eslint-disable-next-line
  const successProps = success && { color: successGreen, icon: SuccessIcon, message: success.message };
  const errorProps = error && { color: errorRed, icon: WarningIcon, message: error.message };
  const { color, icon, message } = successProps || errorProps || {};
  return (
    <BannerWrapper color={color} displayState={displayState} {...restProps}>
      <IconWrapper>{icon}</IconWrapper>
      <Text>{message}</Text>
      <CloseButton
        Icon={CloseIcon}
        onClick={handleClose}
      />
    </BannerWrapper>
  );
};

ErrorSuccessBanner.propTypes = {
  error: T.oneOfType([T.bool, T.object]).isRequired,
  success: T.oneOfType([T.bool, T.object]).isRequired,
};

export default ErrorSuccessBanner;
