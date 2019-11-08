import React from 'react';
import styled from 'styled-components';
import {
  boolean,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import BaseListItemDocs from '../docs/BaseListItem.docs.mdx';
import BaseListItem from '../BaseListItem';

const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 40rem;
`;

export default {
  decorators: [withKnobs],
  parameters: { component: BaseListItem, docs: { page: BaseListItemDocs } },
  title: 'Miscellaneous|BaseListItem',
};

export const defaultStory = () => {
  const bullet = boolean('Bullet', false);
  const button = boolean('Button', false);
  const divider = boolean('Dividers', false);
  return (
    <List>
      <BaseListItem
        bullet={bullet}
        button={button}
        disabled={boolean('Item 1 Disabled', false)}
        divider={divider}
        onClick={action('onClick')}
        selected={boolean('Item 1 Selected', false)}
      >
        {text('Item 1 Text', 'Item 1 Text')}
      </BaseListItem>
      <BaseListItem
        bullet={bullet}
        button={button}
        disabled={boolean('Item 2 Disabled', false)}
        divider={divider}
        onClick={action('onClick')}
        selected={boolean('Item 2 Selected', false)}
      >
        {text('Item 2 Text', 'Item 2 Text')}
      </BaseListItem>
      <BaseListItem
        bullet={bullet}
        button={button}
        disabled={boolean('Item 3 Disabled', false)}
        onClick={action('onClick')}
        selected={boolean('Item 3 Selected', false)}
      >
        {text('Item 3 Text', 'Item 3 Text')}
      </BaseListItem>
    </List>
  );
};

defaultStory.story = { name: 'default' };
