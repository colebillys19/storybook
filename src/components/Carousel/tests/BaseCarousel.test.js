import React, { useState } from 'react';
import {
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
  checkBasicRendering,
  checkChildren,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import BaseCarousel from '../BaseCarousel';
import BaseCarouselItem from '../sub-components/BaseCarouselItem';
import { PaymentAssistanceImage } from '../constants';


afterEach(cleanup);

describe('<BaseCarousel />', () => {
  // eslint-disable-next-line react/prop-types
  const TestCarousel = ({ children, itemsPerSlide }) => {
    const [position, setPosition] = useState(0);
    return (
      <BaseCarousel
        // eslint-disable-next-line react/no-children-prop
        children={children}
        itemsPerSlide={itemsPerSlide}
        position={position}
        setPosition={setPosition}
      />
    );
  };


  const defaultCarouselItem = {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.',
    imageUrl: PaymentAssistanceImage,
    title: 'Carousel Item Title',
  };

  const children = Array.from({ length: 6 }).map((_, index) => (
    <BaseCarouselItem
      // eslint-disable-next-line react/no-array-index-key
      key={`carousel-image-${index}`}
      {...defaultCarouselItem}
    />
  ));

  const component = (
    <TestCarousel
      // eslint-disable-next-line react/no-children-prop
      children={children}
      itemsPerSlide={4}
    />
  );

  
  checkBasicRendering(component);
  checkRequiredProps(component);
  checkChildren(component, children);
});
