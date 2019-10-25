import React from 'react';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BasePaper from 'components/Paper/BasePaper';

import imgPlaceholder from 'utils/imagePlaceholder.svg';

const paddingOptions = {
  '1rem': '1rem',
  '2rem': '2rem',
  '3rem': '3rem',
};
const paddingDefault = '2rem';

const paperText = 'paper text';

export default {
  decorators: [withKnobs],
  parameters: { component: BasePaper },
  title: 'Paper|BasePaper',
};

export const defaultStory = () => (
  <BasePaper>
    <div style={{ padding: select('Paper Content Padding', paddingOptions, paddingDefault) }}>
      {text('Paper Text', paperText)}
    </div>
  </BasePaper>
);

defaultStory.story = { name: 'default' };

export const image = () => (
  <BasePaper>
    <div style={{ padding: select('Paper Content Padding', paddingOptions, paddingDefault) }}>
      <img alt="placeholder" src={imgPlaceholder} style={{ width: '10rem' }} />
    </div>
  </BasePaper>
);

image.story = { name: 'image' };
