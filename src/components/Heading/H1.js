/**
*
* H1
* @description: Wraps text to create an <h1> header
* Use Case: Creating large titles or headers
*/

import React from 'react';
import T from 'prop-types';

import { ExtendedH1 } from './styles/Headings.styles';

const H1 = (props) => (
  <ExtendedH1 {...props} />
);

H1.propTypes = {
  children: T.oneOfType([
    T.string,
    T.object,
  ]).isRequired,
};

export default H1;
