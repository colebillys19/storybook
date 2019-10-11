/**
*
* BaseLink
* @description Base Link to be used throughout Silver Site
* API Usage: {
*   path: Relative url representing the location to link to. Can be a string or an url object.
*   label: Text link label
*   replace: When true, clicking the link will replace current entry in history stack instead of add a new one.
* }
*/

import React from 'react';
import T from 'prop-types';
import StyledBaseLink from './styles/BaseLink.styles';
import ConditionalRender from '../../shared/ConditionalRender';

const BaseLink = ({
  Icon,
  label,
  path,
  replace,
  ...restProps
}) => (
  <StyledBaseLink
    classes={{ root: 'link' }}
    replace={replace}
    to={path}
    {...restProps}
  >
    <ConditionalRender Component={Icon} shouldRender={!!Icon} />
    {label}
  </StyledBaseLink>
);

BaseLink.propTypes = {
  Icon: T.object,
  label: T.oneOfType([T.string, T.arrayOf(T.element)]).isRequired,
  path: T.oneOfType([T.string, T.object]).isRequired,
  replace: T.bool,
};

export default BaseLink;
