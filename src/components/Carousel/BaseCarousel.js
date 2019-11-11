import React from 'react';
import T from 'prop-types';

import NavigationButtons from './sub-components/NavigationButtons';
import SlideIndicator from './sub-components/SlideIndicator';
import {
  SlidingContainer,
  CarouselItem,
  CarouselWrapper,
  ContentWrapper,
  OverflowWrapper,
} from './styles/BaseCarousel.styles';

const BaseCarousel = ({
  children,
  itemsPerSlide,
  position,
  setPosition,
}) => {
  const numItems = children.length - itemsPerSlide + 1;
  const width = 100 / itemsPerSlide;
  return (
    <CarouselWrapper>
      <NavigationButtons
        numItems={numItems}
        position={position}
        setPosition={setPosition}
      >
        <ContentWrapper>
          <OverflowWrapper>
            <SlidingContainer position={position} width={width}>
              {children.map((child, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <CarouselItem key={`carousel-item-${index}`} width={width}>
                  {child}
                </CarouselItem>
              ))}
            </SlidingContainer>
          </OverflowWrapper>
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
   * The items rendered in the carousel.
   */
  children: T.node.isRequired,
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
  itemsPerSlide: 1,
  position: 0,
};

export default BaseCarousel;
