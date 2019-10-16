import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import iconDictionary from '../../../utils/iconDictionary';
import { TooltipButton } from '../index';

const inboxIcon = iconDictionary('inbox', 'mediumSmall', 'button');

describe('<TooltipButton />', () => {
  const onClick = jest.fn();
  const component = (
    <TooltipButton
      Icon={inboxIcon}
      label="label text"
      onClick={onClick}
      tooltipText="tooltip text"
    />
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
