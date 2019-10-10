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

import BaseLink from '../BaseLink';

storiesOf('Links|BaseLink', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator(withKnobs)
  .add('default', () => {
    const label = text('label', 'Base Link');
    const path = text('path', 'path');
    const replace = boolean('replace', true);

    return (
      <BaseLink
        label={label}
        path={path}
        replace={replace}
      />
    );
  })
  .add('icon', () => {
    const label = text('label', 'Base Link', 'Link Props');
    const path = text('path', 'path', 'Link Props');
    const replace = boolean('replace', true, 'Link Props');
    const name = text('name', 'star', 'Icon Props');
    const size = text('size', 'small', 'Icon Props');
    const style = text('style', '', 'Icon Props');
    const options = object('options', { color: 'inherit' }, 'Icon Props');

    return (
      <BaseLink
        Icon={iconDictionary(name, size, style, options)}
        label={label}
        path={path}
        replace={replace}
      />
    );
  });
