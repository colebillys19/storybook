import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import iconDictionary from '../../../shared/iconDictionary';

import GhostButtonLink from '../GhostButtonLink';

const linkProps = {
  iconName: 'star',
  iconSize: 'small',
  label: 'Ghost Button Link Label',
  path: 'ghostButtonLinkPath',
  replace: true,
};

storiesOf('Links|GhostButtonLink', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <GhostButtonLink label={linkProps.label} path={linkProps.path} replace />
  ))
  .add('icon', () => (
    <GhostButtonLink
      Icon={iconDictionary(text('iconName', linkProps.iconName), text('iconSize', linkProps.iconSize))}
      label={text('label', linkProps.label)}
      path={text('path', linkProps.path)}
      replace={boolean('replace', true)}
    />
  ));
