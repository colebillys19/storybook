import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import iconDictionary from 'utils/iconDictionary';

import BasePaper from '../BasePaper';

const paddingOptions = {
  '1rem': '1rem',
  '2rem': '2rem',
  '3rem': '3rem',
};
const paddingDefault = '2rem';

const paperText = 'paper text';

const imagePlaceholder = iconDictionary('imagePlaceholder', 'large');

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
        {imagePlaceholder}
      </div>
    </BasePaper>
  ));
