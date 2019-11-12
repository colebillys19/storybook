import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { select, text, withKnobs } from '@storybook/addon-knobs/react';

import GhostButtonLinkDocs from '../docs/GhostButtonLink.docs.mdx';
import GhostButtonLink from '../GhostButtonLink';
import iconDictionary from '../../../utils/iconDictionary';
import { iconOptions } from '../../../utils/storyConstants';

export default {
  decorators: [
    (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
    withKnobs,
  ],
  parameters: { component: GhostButtonLink, docs: { page: GhostButtonLinkDocs } },
  title: 'Links|GhostButtonLink',
};

export const defaultStory = () => (
  <GhostButtonLink path={'path'} text={text('Link Text', 'Link Text')} />
);

defaultStory.story = { name: 'default' };

export const withIconStory = () => (
  <GhostButtonLink
    Icon={iconDictionary(select('Icon', iconOptions, 'star'), 'small', 'link')}
    path={'path'}
    text={text('Link Text', 'Link Text')}
  />
);

withIconStory.story = { name: 'with icon' };
