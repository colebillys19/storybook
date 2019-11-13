import React from 'react';
import {
  boolean,
  color,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';
import BaseCardDocs from '../docs/BaseCard.docs.mdx';

import BaseCard from '../BaseCard';
import { StyledH1 } from '../styles/BaseCard.styles';
import { msBrightPurple } from '../../../utils/defaultStyleHelper';

const textPaddingOptions = {
  '0.5rem 1.5rem': '0.5rem 1.5rem',
  '1rem 2rem': '1rem 2rem',
  '2rem 3rem': '2rem 3rem',
  '3rem 4rem': '3rem 4rem',
};

const imagePaddingOptions = {
  '0.5rem': '0.5rem',
  '1rem': '1rem',
  '2rem': '2rem',
  '3rem': '3rem',
};

const imageContainerStyles = {
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  border: '0.2rem solid #1f1f1f',
  display: 'flex',
};

export default {
  decorators: [withKnobs],
  parameters: { component: BaseCard, docs: { page: BaseCardDocs } },
  title: 'Miscellaneous|BaseCard',
};

export const defaultStory = () => {
  const hasColor = boolean('Has Color', true);
  return (
    <BaseCard
      color={hasColor ? color('Color', msBrightPurple) : null}
      id="base-card"
    >
      <div
        style={{
          padding: select(
            'Card Content Padding',
            textPaddingOptions,
            '1rem 2rem'
          ),
        }}
      >
        {text('Card Text', 'Card Text')}
      </div>
    </BaseCard>
  );
};

defaultStory.story = { name: 'default' };

export const headingStory = () => {
  const hasColor = boolean('Has Color', true);
  return (
    <BaseCard
      color={hasColor ? color('Color', msBrightPurple) : null}
    >
      <div
        style={{
          padding: select(
            'Card Content Padding',
            textPaddingOptions,
            '1rem 2rem'
          ),
        }}
      >
        <StyledH1>{text('Card Text', 'Card Text')}</StyledH1>
      </div>
    </BaseCard>
  );
};

headingStory.story = { name: 'heading' };

export const imageStory = () => {
  const hasColor = boolean('Has Color', true);
  return (
    <BaseCard
      color={hasColor ? color('Color', msBrightPurple) : null}
    >
      <div
        style={{
          padding: select(
            'Card Content Padding',
            imagePaddingOptions,
            '2rem',
          ),
        }}
      >
        <div style={imageContainerStyles}>
          {iconDictionary('image', 'large')}
        </div>
      </div>
    </BaseCard>
  );
};

imageStory.story = { name: 'image' };
