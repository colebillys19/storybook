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

import { StyledCard } from './styles/BaseCard.styles';

/**
 * Use `BaseCard` for displaying content.
 */
const Card = (restProps) => (
  <StyledCard classes={{ root: 'card' }} {...restProps} />
);

Card.propTypes = {
  /**
   * The content of the component.
   */
  children: T.node,
  /**
   * The color of the top border.
   */
  color: T.string,
  /**
   * If true, the card will use raised styling.
   */
  raised: T.bool,
  /**
   * The width of the card.
   */
  width: T.string,
};

Card.defaultProps = {
  color: '#310078',
  raised: false,
  width: 'max-content',
};

export default Card;
