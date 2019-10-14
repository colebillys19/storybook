/**
*
* BaseListItem
* @description BaseListItem used as a base to create ListItems for List Component
* API Usage: {
*   button: (bool) If true, the list item will be a button (using ButtonBase).
*   classes: (object) classes object created by Main, Special, or Modal buttons.
*            The classes targets which Material-UI nested component to overwrite styling
*   className: (string) the assigned className. If overwriting styles using styled-components,
*               className must be included in order for the component to apply the proper styling.
*   children: (node) The content of the component.
*   disabled: (bool) If true, the list item will be disabled.
*   styling: Styling object to override default styles. Only applies to the root styling.
*   text: (string) The text that will be the content of the item.
* }
*/
// Dependencies
import React from 'react';
import T from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const BaseListItem = ({
  children,
  text,
  ...restProps
}) => (
  <ListItem {...restProps}>
    <ListItemText className="item-text" primary={text} />
    {children}
  </ListItem>
);

BaseListItem.propTypes = {
  button: T.bool,
  disabled: T.bool,
  text: T.string.isRequired,
};

BaseListItem.defaultProps = {
  button: false,
  disabled: false,
};

export default BaseListItem;
