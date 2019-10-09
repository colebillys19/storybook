/**
 *
 * ErrorBanner
 * @description: Individual error banner which is hidden on the page until an error occurs
 * Use Case: Display this component when an error occurs
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import iconDictionary from 'utils/iconDictionary';
import { errorRed, successGreen } from '../../shared/defaultStyleHelper';
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

  const successProps = success && { color: successGreen, icon: SuccessIcon, message: success.message };
  const errorProps = error && { color: errorRed, Icon: WarningIcon, message: error.message };
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
