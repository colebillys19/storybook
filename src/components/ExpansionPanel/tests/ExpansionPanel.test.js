import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import {
  checkBasicRendering,
  checkChildren,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '../index';

// to enable use of waitForElement
global.document.createRange = () => ({
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
  setEnd: () => {},
  setStart: () => {},
});

describe('<ExpansionPanel />', () => {
  const Summary = (
    <ExpansionPanelSummary>
      Title text
    </ExpansionPanelSummary>
  );

  const Details = (
    <ExpansionPanelDetails>
      Details Text
    </ExpansionPanelDetails>
  );

  const SimpleExpansionPanel = (
    <ExpansionPanel children={[Summary, Details]} />
  );

  const component = SimpleExpansionPanel;
  
  const { container, debug } = render(component);
  debug();
  const children = [Summary, Details];
  // const component = (
  //   <ExpansionPanel
  //     children={children}
  //   />
  // );

  checkBasicRendering(component);
  checkRequiredProps(component);
  checkChildren(component, children);
});
