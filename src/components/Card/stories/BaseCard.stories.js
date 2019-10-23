import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import BaseCard from '../BaseCard';
import { StyledH1 } from '../styles/BaseCard.styles';
import {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  ssDarkBlue,
  ssLightBlue,
  ssMainBlue,
  ssYellow,
} from 'utils/defaultStyleHelper';
import imgPlaceholder from 'utils/imagePlaceholder.svg';

const colorOptions = {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  ssDarkBlue,
  ssLightBlue,
  ssMainBlue,
  ssYellow,
};
const colorDefault = msBrightPurple;

const paddingOptions = {
  '0.5rem': '0.5rem',
  '1rem': '1rem',
  '2rem': '2rem',
  '3rem': '3rem',
};
const paddingDefault = '1rem';

const cardText = 'card text';

storiesOf('Cards|BaseCard', module)
  .addParameters({ component: BaseCard })
  .addDecorator(withKnobs)
  .add('default', () => (
    <BaseCard color={select('Card Color', colorOptions, colorDefault)}>
      <div style={{ padding: select('Card Content Padding', paddingOptions, paddingDefault) }}>
        {text('Card Text', cardText)}
      </div>
    </BaseCard>
  ))
  .add('title', () => (
    <BaseCard color={select('Card Color', colorOptions, colorDefault)}>
      <div style={{ padding: select('Card Content Padding', paddingOptions, paddingDefault) }}>
        <StyledH1>{text('Card Text', cardText)}</StyledH1>
      </div>
    </BaseCard>
  ))
  .add('image', () => (
    <BaseCard color={select('Card Color', colorOptions, colorDefault)}>
      <div style={{ padding: select('Card Content Padding', paddingOptions, paddingDefault) }}>
        <img
          alt="placeholder"
          src={imgPlaceholder}
          style={{ width: '10rem' }}
        />
      </div>
    </BaseCard>
  ));
