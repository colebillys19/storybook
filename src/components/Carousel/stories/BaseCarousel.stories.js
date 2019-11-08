import React from 'react';
import useState from 'storybook-addon-state';
import {
  number,
  object,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import BaseCarousel from '../BaseCarousel';
import BaseCarouselItem from '../sub-components/BaseCarouselItem';
import { VIDEO_TUTORIALS } from '../constants';
import BaseCarouselDocs from '../docs/BaseCarousel.docs.mdx';
import { StyledCardTitle, StyledCard } from '../styles/BaseCarousel.styles';
import {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  ssDarkBlue,
  ssLightBlue,
  ssMainBlue,
  ssYellow,
} from '../../../utils/defaultStyleHelper';
import PaymentAssistanceImage from '../../../images/LearningCenter/PaymentAssistance.png';

const colorOptions = {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  ssDarkBlue,
  ssLightBlue,
  ssMainBlue,
  ssYellow,
};
const colorDefault = ssMainBlue;

const itemsPerSlideOptions = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};
const itemsPerSlideDefault = 4;

const defaultCarouselItem = {
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.',
  imageUrl: PaymentAssistanceImage,
  title: 'Carousel Item Title',
};

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
            key={`carousel-image-${index}`} // eslint-disable-line react/no-array-index-key
            handleClick={action('handleClick')}
            {...carouselItem}
          />
        ))}
      </BaseCarousel>
    </StyledCard>
  );
};

defaultStory.story = { name: 'default' };

// {VIDEO_TUTORIALS.map((item, index) => (
//   <BaseCarouselItem
//     key={`carousel-image-${index}`} // eslint-disable-line react/no-array-index-key
//     handleClick={action('handleClick')}
//     {...item}
//   />
// ))}
