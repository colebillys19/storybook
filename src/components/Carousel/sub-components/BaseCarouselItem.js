import React from 'react';
import T from 'prop-types';

import {
  StyledItemTitle,
  StyledImage,
  StyledItemWrapper,
} from '../styles/BaseCarouselItem.styles';

const BaseCarouselItem = ({
  description,
  imageUrl,
  title,
}) => (
  <StyledItemWrapper>
    <StyledImage src={imageUrl} />
    <StyledItemTitle>{title}</StyledItemTitle>
    <div>{description}</div>
  </StyledItemWrapper>
);

BaseCarouselItem.propTypes = {
  description: T.string,
  imageUrl: T.string.isRequired,
  title: T.string.isRequired,
};

export default BaseCarouselItem;
