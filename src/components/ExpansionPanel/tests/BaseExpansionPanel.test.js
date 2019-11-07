import React from 'react';

import BaseExpansionPanel from '../BaseExpansionPanel';
import ExpansionPanelSummary from '../sub-components/ExpansionPanelSummary';
import ExpansionPanelDetails from '../sub-components/ExpansionPanelDetails';
import {
  checkBasicRendering,
  // checkChildren,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

describe('<BaseExpansionPanel />', () => {
  const Summary = (
    <ExpansionPanelSummary key="summary">
      Title text
    </ExpansionPanelSummary>
  );

  const Details = (
    <ExpansionPanelDetails key="details">
      Details Text
    </ExpansionPanelDetails>
  );
  const children = [Summary, Details];

  /* eslint-disable react/no-children-prop */
  const component = (
    <BaseExpansionPanel
      children={children}
    />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);
  // checkChildren(component, children);
});
