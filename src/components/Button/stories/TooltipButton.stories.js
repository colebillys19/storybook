import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import iconDictionary from '../../../utils/iconDictionary';
import TooltipButton from '../TooltipButton';
import TooltipButtonDocs from '../docs/TooltipButton.docs.mdx';

const label = 'LABEL TEXT';
const tooltipText = 'tooltip text';

const enterDelayOptions = {
  '50ms': 50,
  '100ms': 100,
  '250ms': 200,
  '500ms': 500,
  '750ms': 750,
  '1000ms': 1000,
};
const enterDelayDefault = 100;

/* eslint-disable sort-keys */
const placementOptions = {
  'top-start': 'top-start',
  top: 'top',
  'top-end': 'top-end',
  'right-start': 'right-start',
  right: 'right',
  'right-end': 'right-end',
  'bottom-start': 'bottom-start',
  bottom: 'bottom',
  'bottom-end': 'bottom-end',
  'left-start': 'left-start',
  left: 'left',
  'left-end': 'left-end',
};
/* eslint-enable sort-keys */
const placementDefault = 'bottom';

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};
const iconDefault = 'inbox';

export default {
  decorators: [withKnobs],
  parameters: { component: TooltipButton, docs: { page: TooltipButtonDocs } },
  title: 'Buttons|TooltipButton',
};

/** */
export const defaultStory = () => (
  <TooltipButton
    disabled={boolean('Disabled', false)}
    enterDelay={select('Delay', enterDelayOptions, enterDelayDefault)}
    label={text('Label Text', label)}
    onClick={action('onClickButton')}
    placement={select('Placement', placementOptions, placementDefault)}
    tooltipText={text('Tooltip Text', tooltipText)}
  />
);

defaultStory.story = { name: 'default' };

/** */
export const withIconStory = () => {
  const Icon = iconDictionary(select('Icon', iconOptions, iconDefault), 'mediumSmall', 'button');
  return (
    <TooltipButton
      disabled={boolean('Disabled', false)}
      enterDelay={select('Delay', enterDelayOptions, enterDelayDefault)}
      Icon={Icon}
      label={text('Label Text', label)}
      onClick={action('onClickButton')}
      placement={select('Placement', placementOptions, placementDefault)}
      tooltipText={text('Tooltip Text', tooltipText)}
    />
  );
};

withIconStory.story = { name: 'with icon' };
