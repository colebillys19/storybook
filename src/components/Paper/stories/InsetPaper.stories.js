import React from 'react';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import iconDictionary from '../../../utils/iconDictionary';
import InsetPaper from '../InsetPaper';
import BasePaper from '../BasePaper';

const paddingOptions = {
  '1rem 3rem': '1rem 3rem',
  '2rem 4rem': '2rem 4rem',
  '3rem 5rem': '3rem 5rem',
};
const paddingDefault = '2rem 4rem';

const paperText = 'paper text';

const imageContainerStyles = {
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  border: '0.2rem solid #1f1f1f',
  display: 'flex',
};

export default {
  decorators: [withKnobs],
  parameters: { component: BasePaper },
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
      <div style={imageContainerStyles}>
        {iconDictionary('image', 'large')}
      </div>
    </div>
  </InsetPaper>
);

image.story = { name: 'image' };
