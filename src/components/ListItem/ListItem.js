/**
*
* BaseListItem
* @description BaseListItem used as a base to create ListItems for List Component
* API Usage: {
*   button: (bool) If true, the list item will be a button (using ButtonBase).
*   classes: (object) classes object created by Main, Special, or Modal buttons.
*            The classes targets which Material-UI nested component to overwrite styling
*   className: (object) the assigned className. If overwriting styles using styled-components,
*               className must be included in order for the component to apply the proper styling.
*   children: (node) The content of the component.
*   disabled: (bool) If true, the list item will be disabled.
*   styling: Styling object to override default styles. Only applies to the root styling.
*   text: (string) The text that will be the content of the item.
* }
*/

import React from 'react';
import T from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/**
 * Use `ListItem` to create list items for a list component.
 */
const BaseListItem = ({
  children,
  forwardedRef,
  text,
  ...restProps
}) => (
  <ListItem
    ref={forwardedRef}
    {...restProps}
  >
    <ListItemText className="item-text" primary={text} />
    {children}
  </ListItem>
);

BaseListItem.propTypes = {
  /**
   * Defines the align-items style property.
   */
  alignItems: T.oneOf(['flex-start', 'center']),
  /**
   * If true, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: T.bool,
  /**
   * If true, the list item will be a button (using ButtonBase).
   */
  button: T.bool,
  /**
   * The content of the component.
   * If a ListItemSecondaryAction is used it must be the last child.
   */
  children: T.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a li when button is false and a div when button is true.
   */
  component: T.element,
  /**
   * The container component used when a ListItemSecondaryAction is the last child.
   */
  ContainerComponent: T.oneOfType([T.string, T.element]),
  /**
   * Props applied to the container component if used.
   */
  ContainerProps: T.object,
  /**
   * If true, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: T.bool,
  /**
   * If true, the list item will be disabled.
   */
  disabled: T.bool,
  /**
   * If true, the left and right padding is removed.
   */
  disableGutters: T.bool,
  /**
   * If true, a 1px light border is added to the bottom of the list item.
   */
  divider: T.bool,
  /**
   * The ref forwarded to the root element.
   */
  forwardedRef: T.oneOfType([
    T.func,
    T.shape({ current: T.any }),
  ]),
  /**
   * Use to apply selected styling.
   */
  selected: T.bool,
  /**
   *  The text that will be the content of the item.
   */
  text: T.string.isRequired,
};

BaseListItem.defaultProps = {
  alignItems: 'center',
  autoFocus: false,
  button: false,
  ContainerComponent: 'li',
  ContainerProps: {},
  disabled: false,
  disableGutters: false,
  divider: false,
  selected: false,
};

export default BaseListItem;
