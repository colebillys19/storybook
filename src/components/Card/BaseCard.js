import React from 'react';
import T from 'prop-types';

import { StyledCard } from './styles/BaseCard.styles';

const Card = (props) => (
  <StyledCard classes={{ root: 'card' }} {...props} />
);

Card.propTypes = {
  /**
   * Card content.
   */
  children: T.oneOfType([T.arrayOf(T.node), T.node]).isRequired,
  /**
   * The color of the card's tab.
   */
  color: T.string,
  /**
   * The width of the card.
   */
  width: T.string,
};

export default Card;
