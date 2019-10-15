/**
 * AlertBanner
 * @description: ...
 */

import React from 'react';
import T from 'prop-types';

import { AlertButton, AlertText, Wrapper } from './styles/AlertBanner.styles';

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
  alertText: T.string.isRequired,
  buttonText: T.string.isRequired,
  onClick: T.func,
};

export default AlertBanner;
