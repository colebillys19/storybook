import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import iconDictionary from '../../../shared/iconDictionary';

import BaseLink from '../BaseLink';

const linkProps = {
  iconName: 'star',
  iconSize: 'small',
  label: 'Base Link Label',
  path: 'baseLinkPath',
  replace: true,
};


storiesOf('Links|BaseLink', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <BaseLink label={linkProps.label} path={linkProps.path} replace />
  ))
  .add('icon', () => (
    <BaseLink
      Icon={iconDictionary(text('iconName', linkProps.iconName), text('iconSize', linkProps.iconSize))}
      label={text('label', linkProps.label)}
      path={text('path', linkProps.path)}
      replace={boolean('replace', true)}
    />
  ));
