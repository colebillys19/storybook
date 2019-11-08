import React from 'react';
import T from 'prop-types';
import { Indicator, IndicatorWrapper } from '../styles/BaseCarousel.styles';

const SlideIndicator = ({
  numItems,
  position,
  setPosition,
}) => (
  <IndicatorWrapper>
    {
      Array.from({ length: numItems }).map((_, index) => (
        <Indicator
          key={`carousel-indicator-${index}`} // eslint-disable-line react/no-array-index-key
          checked={position === index}
          onClick={() => setPosition(index)}
        />
      ))
    }
  </IndicatorWrapper>
);

SlideIndicator.propTypes = {
  numItems: T.number.isRequired,
  position: T.number.isRequired,
  setPosition: T.func.isRequired,
};

export default SlideIndicator;
