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

  it('renders nav buttons', () => {
    const { container } = render(component);
    const navButtons = container.querySelectorAll('button');
    expect(navButtons).toHaveLength(2);
  });

  it('renders radios', () => {
    const { container } = render(component);
    const radios = container.querySelectorAll('input[type="radio"]');
    expect(radios).toHaveLength(3);
  });

  it('navigates using nav buttons', () => {
    const { container } = render(component);
    const navButtons = container.querySelectorAll('button');
    const leftNavButton = navButtons[0];
    const rightNavButton = navButtons[1];
    expect(leftNavButton).toBeDisabled();
    expect(rightNavButton).not.toBeDisabled();
    fireEvent.click(rightNavButton);
    expect(leftNavButton).not.toBeDisabled();
    expect(rightNavButton).not.toBeDisabled();
    fireEvent.click(rightNavButton);
    expect(leftNavButton).not.toBeDisabled();
    expect(rightNavButton).toBeDisabled();
  });

  it('navigates using radio buttons', () => {
    const { container } = render(component);
    const radios = container.querySelectorAll('input[type="radio"]');
    const leftRadio = radios[0];
    const middleRadio = radios[1];
    const rightRadio = radios[2];
    expect(leftRadio).toHaveProperty('checked', true);
    expect(middleRadio).toHaveProperty('checked', false);
    expect(rightRadio).toHaveProperty('checked', false);
    fireEvent.click(middleRadio);
    expect(middleRadio).toHaveProperty('checked', true);
    expect(rightRadio).toHaveProperty('checked', false);
    expect(leftRadio).toHaveProperty('checked', false);
    fireEvent.click(rightRadio);
    expect(rightRadio).toHaveProperty('checked', true);
    expect(leftRadio).toHaveProperty('checked', false);
    expect(middleRadio).toHaveProperty('checked', false);
  });

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkChildren(component, children);
});
