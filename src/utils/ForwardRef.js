/**
*
* ForwardRef
* @description ...
*
*/

import React from 'react';
import T, { element } from 'prop-types';

const ForwardRef = React.forwardRef((props, ref) => {
  const { Component, ...restProps } = props;
  return <Component forwardedRef={ref} {...restProps} />;
});

ForwardRef.propTypes = { props: T.object, ref: T.instanceOf(element) };

export default ForwardRef;
