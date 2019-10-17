/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import TextButton from '../TextButton';

const label = 'LABEL TEXT';

storiesOf('Buttons|TextButton', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextButton
      disableFocusRipple
      disableRipple
      label={text('Label Text', label)}
      onClick={action('onClickButton')}
    />
  ));
