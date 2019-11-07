import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs/react';

import BaseCheckbox from '../BaseCheckbox';
import BaseCheckboxDocs from '../docs/BaseCheckbox.docs.mdx';

export default {
  decorators: [withKnobs],
  parameters: { component: BaseCheckbox, docs: { page: BaseCheckboxDocs } },
  title: 'Miscellaneous|BaseCheckbox',
};

export const defaultStory = () => (
  <BaseCheckbox
    disabled={boolean('Disabled', false)}
    disableRipple={boolean('Disable Ripple', true)}
    indeterminate={boolean('Indeterminate', false)}
    onClick={action('onClick')}
  />
);

defaultStory.story = { name: 'default' };
