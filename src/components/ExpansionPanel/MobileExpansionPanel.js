/**
*
* MobileAccordion
* @description This accordion is used for displaying data and sub data in mobile Views
* Use Case : If you need an accordion with a mobile first design, or for table Mobile view!
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

import ConditionalRender from 'components/base_ui/ConditionalRender';
import { ViewWrapper } from './styledComponents';
import AsyncAccordionRow from './AsyncAccordionRow';
import AccordionRow from './AccordionRow';

const MobileAccordion = ({
  adornment,
  adornProps,
  component,
  extraSubRowProps,
  isAsyncCall,
  mappable,
  margin,
  ...restProps
}) => {
  const Component = component;
  const Adorn = adornment;
  return (
    <ViewWrapper margin={margin} {...restProps}>
      {
        mappable.map((data, index) => (
          <ConditionalRender
            key={`accordion-row-${index + 1}`}
            Component={AsyncAccordionRow}
            FallbackComponent={AccordionRow}
            propsToPassDown={{
              Adorn,
              adornProps,
              Component,
              data,
              extraSubRowProps,
              index,
              ...restProps,
            }}
            shouldRender={isAsyncCall}
          />
        ))
      }
    </ViewWrapper>
  );
};

MobileAccordion.defaultProps = { isAsyncCall: false };

MobileAccordion.propTypes = {
  adornment: T.oneOfType([T.node, T.func]),
  adornProps: T.object,
  component: T.oneOfType([T.object, T.func]).isRequired,
  extraSubRowProps: T.object,
  handleClick: T.func,
  isAsyncCall: T.bool,
  mappable: T.array.isRequired,
  margin: T.string,
};

export default MobileAccordion;
