import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { select, text, withKnobs } from '@storybook/addon-knobs/react';

import BaseLinkDocs from '../docs/BaseLink.docs.mdx';
import BaseLink from '../BaseLink';
import iconDictionary from '../../../utils/iconDictionary';
import { iconOptions } from '../../../utils/storyConstants';

export default {
  decorators: [
    (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
    withKnobs,
  ],
  parameters: { component: BaseLink, docs: { page: BaseLinkDocs } },
  title: 'Links|BaseLink',
};

const LinkWrapper = styled.div`padding: 0.6rem 1.4rem;`;

export const defaultStory = () => (
  <LinkWrapper>
    <BaseLink path={'path'} text={text('Link Text', 'Link Text')} />
  </LinkWrapper>
);

defaultStory.story = { name: 'default' };

export const withIconStory = () => (
  <LinkWrapper>
    <BaseLink
      Icon={iconDictionary(select('Icon', iconOptions, 'star'), 'small', 'link')}
      path={'path'}
      text={text('Link Text', 'Link Text')}
    />
  </LinkWrapper>
);

withIconStory.story = { name: 'with icon' };
