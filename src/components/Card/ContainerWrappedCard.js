/**
*
* Card
* @description Card component for displaying content
* Use Case : Card receives content passed as children and will have
* defualt styling that adheres to style guide
*/
import React from 'react';
import T from 'prop-types';
import Card from './BaseCard';

import { CardContainer } from './styles/sharedStyles';

const ContainerWrappedCard = ({ children, ...restProps }) => (
  <CardContainer classes={{ root: 'paper' }}>
    <Card width="100%" {...restProps}>
      {children}
    </Card>
  </CardContainer>
);

ContainerWrappedCard.propTypes = { children: T.node };

export default ContainerWrappedCard;
