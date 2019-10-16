/**
*
* Card
* @description Card component for displaying content
* Usage : {
*   color: (string) top card border color - optional, defaults to msBrightPurple
*   width: (string) card width - optional
* }
*/
import React from 'react';
import T from 'prop-types';

import StyledCard from './styles/BaseCard.styles';

const Card = (restProps) => (
  <StyledCard classes={{ root: 'card' }} {...restProps} />
);

Card.propTypes = { children: T.node };

export default Card;
