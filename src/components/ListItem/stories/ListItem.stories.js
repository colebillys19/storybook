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

import { ListItem } from '../index';
import iconDictionary from '../../../utils/iconDictionary';

const defaultListItem = {
  button: false,
  disabled: false,
  text: 'Default List Item',
};

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'star';

storiesOf('List Items|ListItem', module)
  .addDecorator(withKnobs)
  .add('default', () => <ListItem {...defaultListItem} />)
  .add('button', () => (
    <ListItem
      button={boolean('button', true)}
      disabled={boolean('disabled', false)}
      onClick={action('onClickButton')}
      text={text('text', 'List Item Button')}
    />
  ))
  .add('disabled', () => (
    <ListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', true)}
      onClick={action('onClickButton')}
      text={text('text', 'List Item Disabled')}
    />
  ))
  .add('icon', () => (
    <ListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      onClick={action('onClickButton')}
      selected={boolean('selected', false)}
      text={text('text', 'List Item w/ Icon')}
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
      onClick={action('onClickButton')}
      selected={boolean('selected', true)}
      text={text('text', 'List Item Selected')}
    />
  ));
