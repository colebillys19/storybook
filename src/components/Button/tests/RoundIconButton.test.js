import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {
  checkBasicRendering,
  checkRequiredProps,
  checkSimpleChild,
} from '../../../utils/testingHelpers';
import iconDictionary from '../../../utils/iconDictionary';
import RoundIconButton from '../RoundIconButton';

const InboxIcon = iconDictionary('inbox', 'mediumSmall', 'button');

describe('<RoundIconButton />', () => {
  const onClick = jest.fn();
  const component = <RoundIconButton onClick={onClick}>{InboxIcon}</RoundIconButton>;

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkSimpleChild(component, InboxIcon);

  it('calls onClick when button is clicked', () => {
    const { container } = render(component);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
