/**
*
* AccordionRow
* @description This accordion is used for displaying data and sub data. and a custom
* panel summary title.
* Use Case : If you need an accordion and sub components and want to style the panel title/summary
* , use it!
* It will take in:
* Adorn: this is typically a icon on the left of the accordion
*   label/Expansion Panel
* Component: What you want to show when expanding a panel. Should have async call
* in render.
* handleClick: any click handler needed inside the expansion Panel
* handleRenderTitle: a function which renders the custom title.
* data: An array of items that will map the proper data needed
*   should be comprised of Data and Title properties inside an array of objects
* restProps: anything else you want sent to the Component you are mapping
*/

import React from 'react';
import T from 'prop-types';

import { ExpandMore } from 'utils/svg/materialUiIcons';
import { ExpansionPanel } from 'components/base_ui/ExpansionPanel';
import { PanelSummary } from './styledComponents';

const AccordionRow = ({
  Adorn,
  adornProps,
  Component,
  data,
  extraSubRowProps,
  handleClick,
  handleRenderTitle,
  index,
  ...restProps
}) => (
  <ExpansionPanel classes={{ root: 'expansion' }} {...restProps}>
    <PanelSummary
      classes={{
        content: 'content',
        expanded: 'expanded',
        expandIcon: 'expandIcon',
        root: 'panel',
      }}
      expandIcon={<ExpandMore />}
    >
      {Adorn && (
        <Adorn
          index={index}
          {...adornProps}
        />
      )}
      {handleRenderTitle(data)}
    </PanelSummary>
    <Component
      data={data}
      extraSubRowProps={extraSubRowProps}
      handleClick={handleClick}
      index={index}
      {...restProps}
    />
  </ExpansionPanel>
);

AccordionRow.propTypes = {
  Adorn: T.oneOfType([T.node, T.func]),
  adornProps: T.object,
  Component: T.oneOfType([T.object, T.func]).isRequired,
  data: T.object.isRequired,
  extraSubRowProps: T.object,
  handleClick: T.func,
  handleRenderTitle: T.func.isRequired,
  index: T.number.isRequired,
};

export default AccordionRow;
