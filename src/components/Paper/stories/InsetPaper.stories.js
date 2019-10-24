import React from 'react';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import InsetPaper from '../InsetPaper';

import imgPlaceholder from '../../../utils/imagePlaceholder.svg';

const paddingOptions = {
  '1rem': '1rem',
  '2rem': '2rem',
  '3rem': '3rem',
};
const paddingDefault = '2rem';

const paperText = 'paper text';

export default {
  decorators: [withKnobs],
  parameters: { component: InsetPaper },
  title: 'Paper|InsetPaper',
};

export const defaultStory = () => (
  <InsetPaper>
    <div style={{ padding: select('Paper Content Padding', paddingOptions, paddingDefault) }}>
      {text('Paper Text', paperText)}
    </div>
  </InsetPaper>
);

defaultStory.story = { name: 'default' };

export const image = () => (
  <InsetPaper>
    <div style={{ padding: select('Paper Content Padding', paddingOptions, paddingDefault) }}>
      <img alt="placeholder" src={imgPlaceholder} style={{ width: '10rem' }} />
    </div>
  </InsetPaper>
);

image.story = { name: 'image' };
