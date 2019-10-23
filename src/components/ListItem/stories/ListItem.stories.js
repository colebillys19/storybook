/**
 * @description Component that renders a listItem.
 * @property button: (bool) If true, the list item will be a button (using ButtonBase).
 * @property disabled: (bool) If true, the list item will be disabled.
 * @property selected: (bool) Use to apply selected styles.
 * @property text: (string) The text that will be the content of the item.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import ListItem from '../ListItem';
import iconDictionary from 'utils/iconDictionary';

const listItemText = 'List Item Text';

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'star';

storiesOf('List Items|ListItem', module)
  .addParameters({ component: ListItem })
  .addDecorator(withKnobs)
  .add('default', () => <ListItem text={listItemText} />)
  .add('button', () => (
    <ListItem
      button
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      text={text('Text', listItemText)}
    />
  ))
  .add('disabled', () => (
    <ListItem
      disabled
      text={text('Text', listItemText)}
    />
  ))
  .add('icon', () => (
    <ListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      selected={boolean('selected', false)}
      text={text('Text', listItemText)}
    >
      <ListItemIcon>
        {iconDictionary(select('Icon', iconOptions, iconDefault))}
      </ListItemIcon>
    </ListItem>
  ))
  .add('selected', () => (
    <ListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      selected
      text={text('Text', listItemText)}
    />
  ));
