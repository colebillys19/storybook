import React from 'react';
import styled from 'styled-components';

import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import AttachMoney from '@material-ui/icons/AttachMoney';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExposurePlus1 from '@material-ui/icons/ExposurePlus1';
import Inbox from '@material-ui/icons/Inbox';
import Star from '@material-ui/icons/Star';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Warning from '@material-ui/icons/Warning';

import {
  ArrowDown,
  Cancel,
  CloseMenu,
  ImagePlaceholder,
  Profile,
} from '../svg';

import { iconStyle, iconSize } from './defaultStyleHelper';

/**
* @description: Creates a formatted icon, based on name, size, and options
*
* @param name {string}: the name/label of the icon to use
* @param size {string}: 'large', 'medium', 'small', or 'xSmall'
* @param style {string}: icon styling to apply
* @param options {object}: additional options for the icon
* (including color, hoverColor, etc.)
* @return {React component}: the rendered icon with the styling and options
* passed down as props
*/

export default (name, size, style, options) => {
  const icons = {
    arrowDown: ArrowDown,
    arrowDropDown: ArrowDropDown,
    cancel: Cancel,
    closeMenu: CloseMenu,
    dollar: AttachMoney,
    expandMore: ExpandMore,
    imagePlaceholder: ImagePlaceholder,
    inbox: Inbox,
    plus1: ExposurePlus1,
    profile: Profile,
    star: Star,
    successOutline: CheckCircleOutline,
    visibility: Visibility,
    visibilityOff: VisibilityOff,
    warning: Warning,
  };
  // Create style object to apply to SVG Icon
  const sizing = iconSize[size] || {};
  const styling = iconStyle[style] || {};
  const stylesToApply = Object.assign({}, sizing, styling);
  const propsToPassDown = Object.assign({}, options);
  const IconToRender = icons[name];
  // Style Icon by applying to root styles
  const StyledIcon = styled(IconToRender)({ '&.root': stylesToApply });
  // Return Styled Icon w/ proper class selection
  return <StyledIcon classes={{ root: 'root' }} className="styled-icon" {...propsToPassDown} />;
};
