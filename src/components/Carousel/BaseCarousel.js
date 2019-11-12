import React from 'react';
import T from 'prop-types';

import NavigationButtons from './sub-components/NavigationButtons';
import SlideIndicator from './sub-components/SlideIndicator';
import {
  SlidingContainer,
  CarouselWrapper,
  ContentWrapper,
} from './styles/BaseCarousel.styles';

import CarouselItem from './sub-components/CarouselItem';

const BaseCarousel = ({
  items,
  itemsPerSlide,
  position,
  setPosition,
}) => {
  const numItems = items.length - itemsPerSlide + 1;
  const width = 100 / itemsPerSlide;
  return (
    <CarouselWrapper>
      <NavigationButtons
        numItems={numItems}
        position={position}
        setPosition={setPosition}
      >
        <ContentWrapper>
          <SlidingContainer position={position} width={width}>
            {items.map((
              {
                description,
                imageUrl,
                title,
              },
              index,
            ) => (
              <CarouselItem
                // eslint-disable-next-line react/no-array-index-key
                key={`carousel-item-${index}`}
                description={description}
                imageUrl={imageUrl}
                title={title}
                width={width}
              />
            ))}
          </SlidingContainer>
          <SlideIndicator
            numItems={numItems}
            position={position}
            setPosition={setPosition}
          />
        </ContentWrapper>
      </NavigationButtons>
    </CarouselWrapper>
  );
};

BaseCarousel.propTypes = {
  /**
   * An array of objects containing carousel item content.
   * Each contains description, imageUrl, and title.
   */
  items: T.arrayOf(T.shape({
    description: T.string,
    imageUrl: T.string.isRequired,
    title: T.string.isRequired,
  })).isRequired,
  /**
   * The amount of items to show per slide.
   */
  itemsPerSlide: T.number,
  /**
   * The position used to render items displayed in the carousel.
   */
  position: T.number,
  /**
   * A function that sets the position and dictates which items to show in the carousel.
   */
  setPosition: T.func.isRequired,
};

BaseCarousel.defaultProps = {
  itemsPerSlide: 3,
  position: 0,
};

export default BaseCarousel;
