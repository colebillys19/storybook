/**
 *
 * ErrorBanner
 * @description: Individual error banner which is hidden on the page until an error occurs
 * Use Case: Display this component when an error occurs
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import iconDictionary from 'utils/iconDictionary';
import {
  BannerWrapper,
  CloseButton,
  ErrorText,
  WarningIconWrapper,
} from './styles/ErrorBanner.styles';

const CloseIcon = iconDictionary('closeMenu', 'small');
const WarningIcon = iconDictionary('warning', 'mediumSmall');

const ErrorBanner = ({ error, ...restProps }) => {
  const [displayState, setDisplayState] = useState(!!error);
  useEffect(() => setDisplayState(!!error), [error]);

  return (
    <BannerWrapper displayState={displayState} {...restProps}>
      <WarningIconWrapper>{WarningIcon}</WarningIconWrapper>
      <ErrorText>{error.message}</ErrorText>
      <CloseButton
        Icon={CloseIcon}
        onClick={() => setDisplayState(false)}
      />
    </BannerWrapper>
  );
};

ErrorBanner.propTypes = { error: T.oneOfType([T.bool, T.object]).isRequired };

export default ErrorBanner;
