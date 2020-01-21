import React from 'react';
import styled from 'styled-components';

import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import AttachMoney from '@material-ui/icons/AttachMoney';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Cancel from '@material-ui/icons/Cancel';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Close from '@material-ui/icons/Close';
import Computer from '@material-ui/icons/Computer';
import CreditCard from '@material-ui/icons/CreditCard';
import Email from '@material-ui/icons/Email';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExposurePlus1 from '@material-ui/icons/ExposurePlus1';
import Image from '@material-ui/icons/Image';
import Inbox from '@material-ui/icons/Inbox';
import Star from '@material-ui/icons/Star';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Warning from '@material-ui/icons/Warning';

import { iconSize } from './defaultStyleHelper';

/**
 * IconDictionary
 * @description: Creates a formatted icon, based on name, size, color, and options
 *
 * @param name {string}: the name/label of the icon to use
 * @param size {string}: 'large', 'medium', 'small', or 'xSmall'
 * @param color {string}: desired icon color
 * @param hoverColor {string}: desired icon hover color
 * @return {React component}: the rendered icon with the styling and options
 * passed down as props
 */

export default (name, size, styling) => {
  const icons = {
    arrowDown: ArrowDropDown,
    arrowLeft: ChevronLeft,
    arrowRight: ChevronRight,
    calendar: CalendarToday,
    cancel: Cancel,
    close: Close,
    computer: Computer,
    creditCard: CreditCard,
    dollar: AttachMoney,
    email: Email,
    expandMore: ExpandMore,
    image: Image,
    inbox: Inbox,
    plus1: ExposurePlus1,
    profile: AccountCircle,
    star: Star,
    successOutline: CheckCircleOutline,
    visibility: Visibility,
    visibilityOff: VisibilityOff,
    warning: Warning,
  };

  const sizing = iconSize[size] || {};
  const stylesToApply = Object.assign({}, sizing, styling);
  const StyledIcon = styled(icons[name])({ '&.root': stylesToApply });
  return <StyledIcon classes={{ root: 'root' }} className="styled-icon" />;
};
