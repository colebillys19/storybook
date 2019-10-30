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
   * Text displayed in alert banner.
   */
  alertText: T.string.isRequired,
  /**
   * Text displayed in button banner.
   */
  buttonText: T.string.isRequired,
  /**
   * Callback function run when alert banner is clicked.
   */
  onClick: T.func,
};

export default AlertBanner;
