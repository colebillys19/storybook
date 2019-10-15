import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
} from '@storybook/addon-knobs/react';

import iconDictionary from '../../../utils/iconDictionary';

import GhostButtonLink from '../GhostButtonLink';

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'star';

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
        select('Icon Size', sizeOptions, sizeDefault, 'Icon Props'),
        'header',
      )}
      label={text('label', 'Ghost Button Link', 'Link Props')}
      path={text('path', 'path', 'Link Props')}
    />
  ));
