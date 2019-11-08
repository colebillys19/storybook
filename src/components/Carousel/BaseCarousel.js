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
   * The component items to render in the carousel.
   */
  children: T.node.isRequired,
  /**
   * The amount of items to show per slide.
   */
  itemsPerSlide: T.number,
  /**
   * The starting item position.
   */
  position: T.number.isRequired,
  /**
   * A function that sets the position that dictates which items to show in the slide.
   */
  setPosition: T.func.isRequired,
};

BaseCarousel.defaultProps = { itemsPerSlide: 1 };

export default BaseCarousel;
