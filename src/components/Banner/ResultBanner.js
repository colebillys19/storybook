import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import iconDictionary from '../../utils/iconDictionary';
import { errorRed, successGreen } from '../../utils/defaultStyleHelper';
import {
  BannerWrapper,
  CloseButton,
  Content,
} from './styles/ResultBanner.styles';

const CloseIcon = iconDictionary('close', 'mediumSmall');
const SuccessIcon = iconDictionary('successOutline', 'mediumSmall');
const WarningIcon = iconDictionary('warning', 'mediumSmall');

const ResultBanner = ({
  error,
  onClose,
  success,
  ...restProps
}) => {
  const isResults = success || error;
  const [displayState, setDisplayState] = useState(!!isResults);
  useEffect(() => setDisplayState(!!isResults), [isResults]);

  const handleClose = () => {
    setDisplayState(false);
    if (onClose) {
      const field = error ? 'error' : 'success';
      onClose(field);
    }
  };

  const successProps = success && {
    color: successGreen,
    Icon: SuccessIcon,
    message: success.message,
  };
  const errorProps = error && {
    color: errorRed,
    Icon: WarningIcon,
    message: error.message,
  };
  const {
    color,
    Icon,
    message,
  } = successProps || errorProps || {};
  return (
    <BannerWrapper
      color={color}
      displayState={displayState}
      {...restProps}
    >
      <Content>
        {Icon}
        <span>{message}</span>
      </Content>
      <CloseButton Icon={CloseIcon} onClick={handleClose} />
    </BannerWrapper>
  );
};

ResultBanner.propTypes = {
  /**
   * Error message to be displayed within the banner.
   */
  error: T.oneOfType([T.bool, T.object]),
  /**
   * Function to be run when a user closes the banner.
   */
  onClose: T.func,
  /**
   * Success messsage to be displayed within the banner.
   */
  success: T.oneOfType([T.bool, T.object]),
};

ResultBanner.defaultProps = { error: false, success: false };

export default ResultBanner;
