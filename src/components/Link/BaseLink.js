import React from 'react';
import T from 'prop-types';
import StyledBaseLink from './styles/BaseLink.styles';
import ConditionalRender from '../../utils/ConditionalRender';

const BaseLink = ({
  Icon,
  path,
  text,
  ...restProps
}) => (
  <StyledBaseLink to={path} {...restProps}>
    <ConditionalRender Component={Icon} shouldRender={!!Icon} />
    {text}
  </StyledBaseLink>
);

BaseLink.propTypes = {
  /**
   * Icon to be displayed with the link.
   */
  Icon: T.oneOfType([T.object, T.func]),
  /**
   * Relative url representing the location to link to. Can be a string or an url object.
   */
  path: T.oneOfType([T.string, T.object]).isRequired,
  /**
   * When true, clicking the link will replace current entry in history stack instead of add a new one.
   */
  replace: T.bool,
  text: T.string.isRequired,
};

BaseLink.defaultProps = { replace: false };

export default BaseLink;
