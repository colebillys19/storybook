import React from 'react';
import T from 'prop-types';

import { Indicator, IndicatorWrapper } from './SlideIndicator.styles';

const SlideIndicator = ({
  numItems,
  position,
  setPosition,
}) => (
  <IndicatorWrapper>
    {
      Array.from({ length: numItems }).map((_, index) => (
        <Indicator
          // eslint-disable-next-line react/no-array-index-key
          key={`carousel-indicator-${index}`}
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
