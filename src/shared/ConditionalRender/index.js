/**
*
* ConditionalRender
* @description Render a component only when a condition is satisfied
* Use Case: Decluttering component render methods with repeated logic
* Parent Components/Containers : [
*  {
*    route: /queryBuilder,
*    name: <NumberPickerRange>,
*  },
* ]
*/

import React from 'react';
import T from 'prop-types';

<<<<<<< HEAD

=======
>>>>>>> 829170aa35cbe4d90516d5380ad884b008006d5b
function ConditionalRender({
  Component,
  FallbackComponent,
  propsToPassDown,
  shouldRender,
}) {
  if (shouldRender) {
    if (typeof Component === 'function') {
      return <Component {...propsToPassDown} />;
    }
    return Component;
  }

  if (FallbackComponent) {
    if (typeof FallbackComponent === 'function') {
      return <FallbackComponent {...propsToPassDown} />;
    }
    return FallbackComponent;
  }

  return null;
}

ConditionalRender.propTypes = {
  Component: T.oneOfType([T.func, T.element]),
  propsToPassDown: T.object,
  shouldRender: T.bool.isRequired,
};

export default ConditionalRender;
