import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from 'utils/testingHelpers';
import iconDictionary from 'utils/iconDictionary';
import IconButton from '../IconButton';

const inboxIcon = iconDictionary('inbox', 'mediumSmall', 'button');

describe('<IconButton />', () => {
  const onClick = jest.fn();
  const component = <IconButton onClick={onClick}>{inboxIcon}</IconButton>;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, inboxIcon);

  it('calls onClick when button is clicked', () => {
    const { container } = render(component);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
