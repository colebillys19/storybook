import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import SecondaryButton from '../SecondaryButton';
import SecondaryButtonDocs from '../docs/SecondaryButton.docs.mdx';
import iconDictionary from '../../../utils/iconDictionary';
import { iconOptions } from '../../../utils/storyConstants';

export default {
  decorators: [withKnobs],
  parameters: { component: SecondaryButton, docs: { page: SecondaryButtonDocs } },
  title: 'Buttons|SecondaryButton',
};

/** */
export const defaultStory = () => (
  <SecondaryButton
    disabled={boolean('Disabled', false)}
    label={text('Label Text', 'LABEL TEXT')}
    onClick={action('onClick')}
  />
);

defaultStory.story = { name: 'default' };

/** */
export const withIconStory = () => {
  const Icon = iconDictionary(select('Icon', iconOptions, 'inbox'), 'mediumSmall', 'button');
  return (
    <SecondaryButton
      disabled={boolean('Disabled', false)}
      Icon={Icon}
      label={text('Label Text', 'LABEL TEXT')}
      onClick={action('onClick')}
    />
  );
};

withIconStory.story = { name: 'with icon' };
