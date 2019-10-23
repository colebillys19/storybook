import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import TooltipIcon from '../TooltipIcon';
import {
  checkBasicRendering,
  checkRequiredProps,
} from 'utils/testingHelpers';

import iconDictionary from 'utils/iconDictionary';

// to enable use of waitForElement
global.document.createRange = () => ({
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
  setEnd: () => {},
  setStart: () => {},
});

const icon = iconDictionary('star', 'medium', 'button');
const tooltipContent = <span>tooltip content</span>;

describe('<TooltipIcon />', () => {
  const component = (
    <TooltipIcon
      Icon={icon}
      TooltipContent={tooltipContent}
    />
  );
  checkBasicRendering(component);
  checkRequiredProps(component);

  it('displays tooltip on icon hover', async () => {
    const { container } = render(component);
    const svg = container.querySelector('svg');
    fireEvent.mouseOver(svg);
    // wait for tooltip to be displayed
    await waitForElement(
      () => container.querySelector('svg[aria-describedby]'),
      { container }
    );
    expect(document.querySelector('div[role="tooltip"]')).toBeTruthy();
  });
});
