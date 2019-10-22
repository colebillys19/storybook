import React from 'react';
import Typography from '@material-ui/core/Typography';

import {
  checkBasicRendering,
  // checkChildren,
  checkRequiredProps,
} from '../../../utils/testingHelpers';

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '../index';

describe('<ExpansionPanel />', () => {
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
    <ExpansionPanel
      children={children}
    />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);
  // checkChildren(component, children);
});
