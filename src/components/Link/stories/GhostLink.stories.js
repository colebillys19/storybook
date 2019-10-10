import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  object,
} from '@storybook/addon-knobs/react';

import iconDictionary from '../../../shared/iconDictionary';

import GhostButtonLink from '../GhostButtonLink';

storiesOf('Links|GhostButtonLink', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => {
    const label = text('label', 'Ghost Button Link');
    const path = text('path', 'path');
    const replace = boolean('replace', true);

    return (
      <GhostButtonLink
        label={label}
        path={path}
        replace={replace}
      />
    );
  })
  .add('icon', () => {
    const label = text('label', 'Ghost Button Link', 'Link Props');
    const path = text('path', 'path', 'Link Props');
    const replace = boolean('replace', true, 'Link Props');
    const name = text('name', 'star', 'Icon Props');
    const size = text('size', 'small', 'Icon Props');
    const style = text('style', '', 'Icon Props');
    const options = object('options', { color: 'inherit' }, 'Icon Props');
    return (
      <GhostButtonLink
        Icon={iconDictionary(name, size, style, options)}
        label={label}
        path={path}
        replace={replace}
      />
    );
  });
