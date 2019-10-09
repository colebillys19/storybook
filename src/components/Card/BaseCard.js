/**
*
* Card
* @description Card component for displaying content
* Use Case : Card receives content passed as children and will have
* defualt styling that adheres to style guide
*/
import React from 'react';
import T from 'prop-types';

import { StyledCard } from './styles/sharedStyles';

const Card = (restProps) => (
  <StyledCard classes={{ root: 'card' }} {...restProps} />
);

Card.propTypes = { children: T.node };

export default Card;
