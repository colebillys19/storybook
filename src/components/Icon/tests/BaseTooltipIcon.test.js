import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import BaseTooltipIcon from '../BaseTooltipIcon';
import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

import iconDictionary from '../../../utils/iconDictionary';

// to enable use of waitForElement
global.document.createRange = () => ({
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
  setEnd: () => {},
  setStart: () => {},
});

const Icon = iconDictionary('star', 'medium');

const tooltipText = 'tooltip text';

describe('<BaseTooltipIcon />', () => {
  const component = <BaseTooltipIcon Icon={Icon} tooltipText={tooltipText} />;
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
