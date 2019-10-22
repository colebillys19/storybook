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

import BasePaper from '../BasePaper';

import imgPlaceholder from '../../../utils/imagePlaceholder.svg';

const paddingOptions = {
  '1rem': '1rem',
  '2rem': '2rem',
  '3rem': '3rem',
};
const paddingDefault = '2rem';

const paperText = 'paper text';

storiesOf('Paper|BasePaper', module)
  .addParameters({ component: BasePaper })
  .addDecorator(withKnobs)
  .add('default', () => (
    <BasePaper>
      <div style={{ padding: select('Paper Content Padding', paddingOptions, paddingDefault) }}>
        {text('Paper Text', paperText)}
      </div>
    </BasePaper>
  ))
  .add('image', () => (
    <BasePaper>
      <div style={{ padding: select('Paper Content Padding', paddingOptions, paddingDefault) }}>
        <img
          alt="placeholder"
          src={imgPlaceholder}
          style={{ width: '10rem' }}
        />
      </div>
    </BasePaper>
  ));
