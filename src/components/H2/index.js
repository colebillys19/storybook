/**
*
* H2
* @description: Wraps text to create an <h2> header
* Use Case: Creating secondary titles or headers
*/

import React from 'react';
import T from 'prop-types';

import { ExtendedH2 } from './styles/H2.styles';

const H2 = (props) => (
  <ExtendedH2 {...props} />
);

H2.propTypes = {
  children: T.oneOfType([
    T.string,
    T.object,
  ]).isRequired,
};

export { H2 };
