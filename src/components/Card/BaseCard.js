import React from 'react';
import T from 'prop-types';

import { StyledCard } from './styles/BaseCard.styles';

const BaseCard = (props) => <StyledCard {...props} />;

BaseCard.propTypes = {
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

export default BaseCard;
