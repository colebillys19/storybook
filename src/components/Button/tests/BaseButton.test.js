import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import iconDictionary from '../../../utils/iconDictionary';
import BaseButton from '../BaseButton';

const InboxIcon = iconDictionary('inbox', 'mediumSmall', 'button');

describe('<BaseButton />', () => {
  const onClick = jest.fn();
  const component = (
    <BaseButton Icon={InboxIcon} label="label text" onClick={onClick} />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);

  it('calls onClick when button is clicked', () => {
    const { container } = render(component);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
