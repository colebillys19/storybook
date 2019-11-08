/**
 *
 * ForwardRef
 * @description helper used to wrap function components in React's forwardRef method
 *              to be used when implementing material UI tooltips
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
