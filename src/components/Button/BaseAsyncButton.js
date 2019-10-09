/**
*
* BaseAsyncButton
* @description Button used as a base to create Async Buttons. On load, the icon and
*              label will be replaced with a Circular Progress wheel and the button will
*              be disabled.
* API Usage: {
*   classes: (object) classes object created by Main, Special, or Modal buttons.
*            The classes targets which Material-UI nested component to overwrite styling
*            The current class that is available to apply styling to is label
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   loading: (boolean) If loading, a circular progress wheel will be displayed instead of
*            the icon/label
*   onClick: onClick handler
* }
*/

import React, { Fragment } from 'react';
import T from 'prop-types';
import Cancel from '../../shared/svg/Cancel';
import ConditionalRender from '../../shared/ConditionalRender';
import StyledBaseButton, { StyledCircularProgress } from './styles/BaseButton.styles';

const BaseAsyncButton = ({
  Icon,
  label,
  loading,
  onClick,
  ...restProps
}) => {
  const loadingDisplay = <StyledCircularProgress size={24} />;
  const defaultDisplay = (
    <Fragment>
      <ConditionalRender Component={Icon || Cancel} shouldRender={!!Icon} />
      {label}
    </Fragment>
  );

  return (
    <StyledBaseButton
      classes={{ disabled: 'disabled', label: 'label' }}
      disabled={loading}
      onClick={onClick}
      variant="contained"
      {...restProps}
    >
      {loading ? loadingDisplay : defaultDisplay}
    </StyledBaseButton>
  );
};

BaseAsyncButton.defaultProps = { label: '' };

BaseAsyncButton.propTypes = {
  Icon: T.object,
  label: T.string,
  onClick: T.func.isRequired,
};

export default BaseAsyncButton;
