import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import TooltipButton from '../TooltipButton';
import TooltipButtonDocs from '../docs/TooltipButton.docs.mdx';
import iconDictionary from '../../../utils/iconDictionary';
import {
  enterDelayOptions,
  iconOptions,
  placementOptions,
} from '../../../utils/storyConstants';

export default {
  decorators: [withKnobs],
  parameters: { component: TooltipButton, docs: { page: TooltipButtonDocs } },
  title: 'Buttons|TooltipButton',
};

export const defaultStory = () => (
  <TooltipButton
    disabled={boolean('Disabled', false)}
    enterDelay={select('Delay', enterDelayOptions, 100)}
    label={text('Label Text', 'LABEL TEXT')}
    onClick={action('onClick')}
    placement={select('Placement', placementOptions, 'bottom')}
    tooltipText={text('Tooltip Text', 'tooltip text')}
  />
);

defaultStory.story = { name: 'default' };

export const withIconStory = () => {
  const Icon = iconDictionary(
    select('Icon', iconOptions, 'inbox'),
    'mediumSmall',
    'button'
  );
  return (
    <TooltipButton
      disabled={boolean('Disabled', false)}
      enterDelay={select('Delay', enterDelayOptions, 100)}
      Icon={Icon}
      label={text('Label Text', 'LABEL TEXT')}
      onClick={action('onClick')}
      placement={select('Placement', placementOptions, 'bottom')}
      tooltipText={text('Tooltip Text', 'tooltip text')}
    />
  );
};

withIconStory.story = { name: 'with icon' };
