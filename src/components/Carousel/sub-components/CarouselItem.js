import React from 'react';
import T from 'prop-types';
import {
  StyledItemTitle,
  StyledImage,
  StyledItemWrapper,
} from '../styles/CarouselItem.styles';

const CarouselItem = ({
  description,
  handleClick,
  imageUrl,
  selected,
  title,
}) => (
  <StyledItemWrapper
    onClick={() => handleClick({ title })}
    selected={selected}
  >
    <StyledImage src={imageUrl} />
    <StyledItemTitle>{title}</StyledItemTitle>
    <div>{description}</div>
  </StyledItemWrapper>
);

CarouselItem.propTypes = {
  description: T.string,
  handleClick: T.func.isRequired,
  imageUrl: T.string.isRequired,
  selected: T.bool.isRequired,
  title: T.string.isRequired,
};

export default CarouselItem;
