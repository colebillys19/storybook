/**
*
* BaseButton
* @description Button used as a base to create Main, Special, and Modal buttons
* API Usage: {
*   classes: (object) classes object created by Main, Special, or Modal buttons.
*            The classes targets which Material-UI nested component to overwrite styling
*   className: (string) the assigned className. If overwriting styles using styled-components,
*               className must be included in order for the component to apply the proper styling.
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles. Only applies to the root styling.
* }
*/

import React from 'react';
import T from 'prop-types';
import Cancel from 'svg/Cancel';
import ConditionalRender from 'utils/ConditionalRender';
import StyledBaseButton from './styles/BaseButton.styles';

const BaseButton = ({
  disableFocusRipple,
  disableRipple,
  Icon,
  label,
  onClick,
  ...restProps
}) => (
  <StyledBaseButton
    classes={{ label: 'label' }}
    disableFocusRipple={disableFocusRipple}
    disableRipple={disableRipple}
    onClick={onClick}
    variant="contained"
    {...restProps}
  >
    <ConditionalRender Component={Icon || Cancel} shouldRender={!!Icon} />
    {label}
  </StyledBaseButton>
);

/* eslint-disable react/default-props-match-prop-types */
BaseButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
  label: '',
};
/* eslint-enable react/default-props-match-prop-types */

BaseButton.propTypes = {
  component: T.func,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  href: T.string,
  Icon: T.oneOfType([T.object, T.func]),
  label: T.oneOfType([T.string, T.element]).isRequired,
  onClick: T.func.isRequired,
  target: T.string,
  to: T.string,
};

export default BaseButton;
