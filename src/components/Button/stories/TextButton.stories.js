import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import BaseButton from '../BaseButton';
import TextButton from '../TextButton';

const label = 'LABEL TEXT';

export default {
  decorators: [withKnobs],
  parameters: { component: BaseButton },
  title: 'Buttons|TextButton',
};

export const defaultStory = () => (
  <TextButton
    disableFocusRipple
    disableRipple
    label={text('Label Text', label)}
    onClick={action('onClickButton')}
  />
);

defaultStory.story = { name: 'default' };
