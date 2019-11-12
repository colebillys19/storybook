import React from 'react';
import T from 'prop-types';

import {
  StyledCarouselItem,
  StyledImage,
  StyledItemTitle,
} from './CarouselItem.styles';

const CarouselItem = ({
  description,
  imageUrl,
  title,
  width,
}) => (
  <StyledCarouselItem width={width}>
    <StyledImage src={imageUrl} />
    <StyledItemTitle>{title}</StyledItemTitle>
    <div>{description}</div>
  </StyledCarouselItem>
);

CarouselItem.propTypes = {
  description: T.string,
  imageUrl: T.string.isRequired,
  title: T.string.isRequired,
  width: T.string,
};

export default CarouselItem;
