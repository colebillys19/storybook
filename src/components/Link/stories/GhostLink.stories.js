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

const sizeDefault = 'small';

const labelText = 'LABEL TEXT';

const path = 'path';

storiesOf('Links|GhostButtonLink', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <GhostButtonLink
      label={text('Label', labelText)}
      path={path}
    />
  ))
  .add('icon', () => (
    <GhostButtonLink
      Icon={iconDictionary(
        select('Icon', iconOptions, iconDefault),
        select('Icon Size', sizeOptions, sizeDefault),
        'button',
      )}
      label={text('Label', labelText)}
      path={path}
    />
  ));
