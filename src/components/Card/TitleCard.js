/**
*
* TitleCard
* @description TitleCard component for displaying TitleCards
* Use Case : Card receives content passed as children and will have
* defualt styling that adheres to style guide
*/
import React from 'react';
import T from 'prop-types';

import { ssLightBlue } from '../../shared/defaultStyles';
import { TitleCard } from './styles/sharedStyles';

const TitleCardComponent = (restProps) => (
  <TitleCard
    classes={{ root: 'card' }}
    color={ssLightBlue}
    {...restProps}
  />
);

TitleCardComponent.propTypes = { children: T.node };

export default TitleCardComponent;
