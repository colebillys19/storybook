import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import iconDictionary from '../../utils/iconDictionary';
import { errorRed, successGreen } from '../../utils/defaultStyleHelper';
import {
  BannerWrapper,
  CloseButton,
  Content,
} from './styles/ErrorSuccessBanner.styles';

const CloseIcon = iconDictionary('close', 'mediumSmall');
const SuccessIcon = iconDictionary('successOutline', 'mediumSmall');
const WarningIcon = iconDictionary('warning', 'mediumSmall');

/**
 * Use `ErrorSuccessBanner` to display either an error or success message.
 */
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
  const errorProps = error && { color: errorRed, icon: WarningIcon, message: error.message };
  const { color, icon, message } = successProps || errorProps || {};
  return (
    <BannerWrapper color={color} displayState={displayState} {...restProps}>
      <Content>
        {icon}
        <span>{message}</span>
      </Content>
      <CloseButton
        Icon={CloseIcon}
        onClick={handleClose}
      />
    </BannerWrapper>
  );
};

ErrorSuccessBanner.propTypes = {
  /**
   * Error message to be displayed within the banner.
   */
  error: T.oneOfType([T.bool, T.object]),
  /**
   * Function to be run when the user closes the banner.
   */
  onClose: T.func,
  /**
   * Success messsage to be displayed within the banner.
   */
  success: T.oneOfType([T.bool, T.object]),
};

ErrorSuccessBanner.defaultProps = {
  error: false,
  success: false,
};

export default ErrorSuccessBanner;
