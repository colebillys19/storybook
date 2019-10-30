/**
 * @description Component that renders a listItem.
 * @property button: (bool) If true, the list item will be a button (using ButtonBase).
 * @property disabled: (bool) If true, the list item will be disabled.
 * @property selected: (bool) Use to apply selected styles.
 * @property text: (string) The text that will be the content of the item.
 */

import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import ListItem from '../ListItem';
import iconDictionary from '../../../utils/iconDictionary';

const listItemText = 'List Item Text';

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'star';

export default {
  decorators: [withKnobs],
  parameters: { component: ListItem },
  title: 'List Items|ListItem',
};

export const defaultStory = () => (
  <div style={{ maxWidth: '30rem' }}>
    <ListItem text={listItemText} />
  </div>
);

defaultStory.story = { name: 'default' };

export const buttonStory = () => (
  <div style={{ maxWidth: '30rem' }}>
    <ListItem
      button
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      text={text('Text', listItemText)}
    />
  </div>
);

buttonStory.story = { name: 'button' };

export const disabledStory = () => (
  <div style={{ maxWidth: '30rem' }}>
    <ListItem disabled text={text('Text', listItemText)} />
  </div>
);

disabledStory.story = { name: 'disabled' };

export const icon = () => (
  <div style={{ maxWidth: '30rem' }}>
    <ListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      selected={boolean('selected', false)}
      text={text('Text', listItemText)}
    >
      <ListItemIcon>{iconDictionary(select('Icon', iconOptions, iconDefault))}</ListItemIcon>
    </ListItem>
  </div>
);

icon.story = { name: 'icon' };

export const selectedStory = () => (
  <div style={{ maxWidth: '30rem' }}>
    <ListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      selected
      text={text('Text', listItemText)}
    />
  </div>
);

selectedStory.story = { name: 'selected' };
