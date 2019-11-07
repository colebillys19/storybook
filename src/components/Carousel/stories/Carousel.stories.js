import React from 'react';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Carousel from '../Carousel';
import CarouselItem from '../sub-components/CarouselItem';
import { VIDEO_TUTORIALS } from '../constants';

export default {
  decorators: [withKnobs],
  parameters: { component: Carousel },
  title: 'Carousel|Carousel',
};


export const defaultStory = () => (
  <Carousel itemsPerSlide={4}>
    {VIDEO_TUTORIALS.map((item, index) => (
      <CarouselItem
        key={`carouseImage-${index}`} // eslint-disable-line react/no-array-index-key
        handleClick={action('handleClick')}
        {...item}
      />
    ))}
  </Carousel>
);

defaultStory.story = { name: 'default' };
