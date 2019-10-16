/**
*
* BasePaper
* @description Material-ui paper component
* Use Case : When you need an already styled card with a box shadow and a white background.
*/
import React from 'react';
import T from 'prop-types';
import StyledPaper from './styles/BasePaper.styles';

const BasePaper = ({ children, ...restProps }) => (
  <StyledPaper {...restProps}>
    {children}
  </StyledPaper>);

BasePaper.propTypes = { children: T.node };

export default BasePaper;
