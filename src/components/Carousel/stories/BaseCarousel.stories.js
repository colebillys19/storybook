import React from 'react';
import useState from 'storybook-addon-state';
import {
  number,
  object,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BaseCarousel from '../BaseCarousel';
import BaseCarouselItem from '../sub-components/BaseCarouselItem';
import BaseCarouselDocs from '../docs/BaseCarousel.docs.mdx';
import { StyledCardTitle, StyledCard } from '../styles/BaseCarousel.styles';
import {
  colorOptions,
  defaultCarouselItem,
  itemsPerSlideDefault,
  itemsPerSlideOptions,
} from '../../../utils/storyConstants';

const colorDefault = colorOptions.ssMainBlue;

export default {
  decorators: [withKnobs],
  parameters: { component: BaseCarousel, docs: { page: BaseCarouselDocs } },
  title: 'Carousel|BaseCarousel',
};

export const defaultStory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [position, setPosition] = useState('position', 0);
  const carouselItem = object('Carousel Item', defaultCarouselItem);
  return (
    <StyledCard color={select('Color', colorOptions, colorDefault)}>
      <StyledCardTitle>{text('Carousel Title', 'Carousel Title')}</StyledCardTitle>
      <BaseCarousel
        itemsPerSlide={select('Items Per Slide', itemsPerSlideOptions, itemsPerSlideDefault)}
        position={position}
        setPosition={setPosition}
      >
        {Array.from({ length: number('Number of Cards', 6) }).map((_, index) => (
          <BaseCarouselItem
            // eslint-disable-next-line react/no-array-index-key
            key={`carousel-image-${index}`}
            {...carouselItem}
          />
        ))}
      </BaseCarousel>
    </StyledCard>
  );
};

defaultStory.story = { name: 'default' };
