/**
*
* AsyncAccordionRow
* @description This accordion is used for displaying data and sub data which
* has an async call. The component controls it's own state. And the sub
* component won't mount until the accordion is expanded.
* Use Case : If you need an accordion and sub components have async call, use it!
* It will take in:
* Adornment: this is typically a icon on the left of the accordion
*   label/Expansion Panel
* Component: What you want to show when expanding a panel. Should have async call
* in render.
* handleClick: any click handler needed inside the expansion Panel
* mappable: An array of items that will map the proper data needed
*   should be comprised of Data and Title properties inside an array of objects
* margin: string of numbers to specificy margin of the whole accordion
* restProps: anything else you want sent to the Component you are mapping
*/
import React, { useState } from 'react';
import T from 'prop-types';

import { ExpandMore } from 'utils/svg/materialUiIcons';
import { ExpansionPanel } from 'components/base_ui/ExpansionPanel';
import { PanelSummary } from './styledComponents';

const AsyncAccordionRow = ({
  Adorn,
  adornProps,
  Component: AsyncComponent,
  data,
  extraSubRowProps,
  handleClick,
  handleRenderTitle,
  index,
  ...restProps
}) => {
  const [isExpanded, setExpandCollaspe] = useState(false);

  const handleChange = () => {
    setExpandCollaspe(!isExpanded);
  };

  return (
    <ExpansionPanel
      classes={{ root: 'expansion' }}
      expanded={isExpanded}
      onChange={handleChange}
      {...restProps}
    >
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
      { isExpanded && (
        <AsyncComponent
          data={data}
          extraSubRowProps={extraSubRowProps}
          handleClick={handleClick}
          index={index}
          {...restProps}
        />
      )}
    </ExpansionPanel>
  );
};

AsyncAccordionRow.propTypes = {
  Adorn: T.oneOfType([T.node, T.func]),
  adornProps: T.object,
  Component: T.oneOfType([T.object, T.func]).isRequired,
  data: T.object.isRequired,
  extraSubRowProps: T.object,
  handleClick: T.func,
  handleRenderTitle: T.func.isRequired,
  index: T.number.isRequired,
};

export default AsyncAccordionRow;
