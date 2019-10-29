/**
*
* H3
* @description: Wraps text to create an <h3> header.
* Use Case: Creating tertiary titles or headers
*/

import React from 'react';
import T from 'prop-types';

import { ExtendedH3 } from './styles/Headings.styles';

const H3 = (props) => (
  <ExtendedH3 {...props} />
);

H3.propTypes = {
  /**
   * Wraps text to create an <h3> header.
   */
  children: T.oneOfType([
    T.string,
    T.object,
  ]).isRequired,
};

export default H3;
