/**
 * AlertBanner
 * @description: ...
 */

import React from 'react';
import T from 'prop-types';

import { AlertButton, AlertText, Wrapper } from './styles/AlertBanner.styles';


/**
 * Use `AlertBanner` to display an alert message.
 */
const AlertBanner = ({ alertText, buttonText, onClick }) => (
  <Wrapper>
    <AlertText>
      <p>
        {alertText}
        {onClick && <AlertButton label={buttonText} onClick={onClick} />}
      </p>
    </AlertText>
  </Wrapper>
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
