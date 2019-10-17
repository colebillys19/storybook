/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import InsetPaper from '../InsetPaper';

import imgPlaceholder from '../../../utils/imagePlaceholder.svg';

const paddingOptions = {
  '1rem': '1rem',
  '2rem': '2rem',
  '3rem': '3rem',
};
const paddingDefault = '2rem';

const paperText = 'paper text';

storiesOf('Paper|InsetPaper', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <InsetPaper>
      <div style={{ padding: select('Paper Content Padding', paddingOptions, paddingDefault) }}>
        {text('Paper Text', paperText)}
      </div>
    </InsetPaper>
  ))
  .add('image', () => (
    <InsetPaper>
      <div style={{ padding: select('Paper Content Padding', paddingOptions, paddingDefault) }}>
        <img
          alt="placeholder"
          src={imgPlaceholder}
          style={{ width: '10rem' }}
        />
      </div>
    </InsetPaper>
  ));
