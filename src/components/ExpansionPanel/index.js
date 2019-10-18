/**
*
* Accordion
* @description This accordion is used for displaying data and sub dataa
* Use Case : If you need an accordion, use it!
* It will take in:
* Adornment: this is typically a icon on the left of the accordion
*   label/Expansion Panel
* Component: What you want to show when expanding a panel
* handleClick: any click handler needed inside the expansion Panel
* mappable: An array of items that will map the proper data needed
*   should be comprised of Data and Title properties inside an array of objects
* margin: string of numbers to specificy margin of the whole accordion
* restProps: anything else you want sent to the Component you are mapping
*/
import React from 'react';
import T from 'prop-types';

import { ExpandMore } from 'utils/svg/materialUiIcons';
import { ExpansionPanel } from 'components/base_ui/ExpansionPanel';
import { PanelSummary, ViewWrapper } from './styledComponents';

const Accordion = ({
  adornment,
  component,
  handleClick,
  mappable,
  margin,
  withExpandIcon,
  ...restProps
}) => {
  const Component = component;
  const Adorn = adornment;
  const ExpandIcon = withExpandIcon ? <ExpandMore /> : null;

  return (
    <ViewWrapper margin={margin} {...restProps}>
      {
        mappable.map(({ data, expProps = {}, title }, index) => (
          <ExpansionPanel
            key={`Accordion-${title}`}
            classes={{ disabled: 'disabled', root: 'expansion' }}
            {...expProps}
          >
            <PanelSummary
              classes={{ content: 'content', expanded: 'expanded', root: 'panel' }}
              expandIcon={ExpandIcon}
            >
              {adornment && (
                <Adorn
                  index={index}
                  {...restProps}
                />
              )}
              <p>{title}</p>
            </PanelSummary>
            <Component
              data={data}
              handleClick={handleClick}
              index={index}
              {...restProps}
            />
          </ExpansionPanel>
        ))
      }
    </ViewWrapper>
  );
};

Accordion.defaultProps = { withExpandIcon: true };

Accordion.propTypes = {
  adornment: T.oneOfType([T.node, T.func]),
  component: T.oneOfType([T.object, T.func]).isRequired,
  handleClick: T.func,
  mappable: T.array.isRequired,
  margin: T.string,
  withExpandIcon: T.bool,
};

export default Accordion;
