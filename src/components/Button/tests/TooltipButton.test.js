import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import iconDictionary from '../../../utils/iconDictionary';
import { TooltipButton } from '../index';

// to enable use of waitForElement
global.document.createRange = () => ({
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
  setEnd: () => {},
  setStart: () => {},
});

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

  it('displays tooltip on button hover', async () => {
    const { container } = render(component);
    const button = container.querySelector('button');
    fireEvent.mouseOver(button);
    await waitForElement(
      () => container.querySelector('button[aria-describedby]'),
      { container }
    );
    expect(document.querySelector('div[role="tooltip"]')).toBeTruthy();
  });
});
