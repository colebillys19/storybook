/**
*
* BasePaper
* @description Material-ui paper component
* Use Case : When you need an already styled card with a box shadow and a white background.
*/
import React from 'react';
import T from 'prop-types';
import Paper from '@material-ui/core/Paper';

const BasePaper = ({ children, ...restProps }) => (
  <Paper {...restProps}>
    {children}
  </Paper>);

BasePaper.propTypes = { children: T.node };

export default BasePaper;
