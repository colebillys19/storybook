import React from 'react';
import T from 'prop-types';

import { AlertButton, AlertText, BannerWrapper } from './styles/AlertBanner.styles';

const AlertBanner = ({
  alertText,
  buttonText,
  onClick,
}) => (
  <BannerWrapper>
    <AlertText>
      {alertText}
      {onClick && <AlertButton label={buttonText} onClick={onClick} />}
    </AlertText>
  </BannerWrapper>
);

AlertBanner.propTypes = {
  /**
   * Alert text to be displayed within the banner.
   */
  alertText: T.string.isRequired,
  /**
   * Button text to be displayed within the banner.
   */
  buttonText: T.string,
  /**
   * Function to run when button is clicked.
   */
  onClick: T.func,
};

export default AlertBanner;
