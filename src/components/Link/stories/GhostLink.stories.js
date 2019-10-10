import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/react';

import iconDictionary from '../../../shared/iconDictionary';

import GhostButtonLink from '../GhostButtonLink';

const iconOptions = {
  cancel: 'cancel',
  home: 'home',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'home';

const sizeOptions = {
  large: 'large',
  medium: 'medium',
  mediumLarge: 'mediumLarge',
  mediumSmall: 'mediumSmall',
  small: 'small',
  xSmall: 'xSmall',
};

const sizeDefault = 'mediumSmall';

storiesOf('Links|GhostButtonLink', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <GhostButtonLink
      label={text('label', 'Ghost Button Link', 'Link Props')}
      path={text('path', 'path', 'Link Props')}
    />
  ))
  .add('icon', () => (
    <GhostButtonLink
      Icon={iconDictionary(
        select('Icon', iconOptions, iconDefault, 'Icon Props'),
        select('Icon Size', sizeOptions, sizeDefault, 'Icon Props')
      )}
      label={text('label', 'Ghost Button Link', 'Link Props')}
      path={text('path', 'path', 'Link Props')}
    />
  ));
