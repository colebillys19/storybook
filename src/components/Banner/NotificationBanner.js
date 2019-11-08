import React from 'react';
import T from 'prop-types';

import {
  BannerWrapper,
  NotificationButton,
  NotificationText,
} from './styles/NotificationBanner.styles';

const NotificationBanner = ({ alert, buttonText, messageText, onClick }) => (
  <BannerWrapper isAlert={alert}>
    <NotificationText>
      {messageText}
      {onClick && <NotificationButton label={buttonText} onClick={onClick} />}
    </NotificationText>
  </BannerWrapper>
);

NotificationBanner.propTypes = {
  /**
   * ...
   */
  alert: T.bool,
  /**
   * Button text to be displayed within the banner.
   */
  buttonText: T.string,
  /**
   * Alert text to be displayed within the banner.
   */
  messageText: T.string.isRequired,
  /**
   * Function to run when button is clicked.
   */
  onClick: T.func,
};

NotificationBanner.defaultProps = { alert: false };

export default NotificationBanner;
