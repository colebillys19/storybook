import React from 'react';
import T from 'prop-types';
import StyledBaseLink from './styles/BaseLink.styles';
import ConditionalRender from '../../utils/ConditionalRender';

/**
 * Use `BaseLink` when a link is need.
 */
const BaseLink = ({ Icon, label, path, ...restProps }) => (
  <StyledBaseLink to={path} {...restProps}>
    <ConditionalRender Component={Icon} shouldRender={!!Icon} />
    {label}
  </StyledBaseLink>
);

BaseLink.propTypes = {
  /**
   * (SVG) Icon to render if provided.
   * Icons should be selected and styled through the iconDictionary before reaching this component.
   */
  Icon: T.object,
  /**
   * The text link label.
   */
  label: T.oneOfType([T.string, T.arrayOf(T.element)]).isRequired,
  /**
   * Relative url representing the location to link to. Can be a string or an url object.
   */
  path: T.oneOfType([T.string, T.object]).isRequired,
  /**
   * When true, clicking the link will replace current entry in history stack instead of add a new one.
   */
  replace: T.bool,
};

export default BaseLink;
