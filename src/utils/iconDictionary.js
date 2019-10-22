import React from 'react';
import styled from 'styled-components';

import Alarm from '@material-ui/icons/Alarm';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Block from '@material-ui/icons/Block';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Create from '@material-ui/icons/Create';
import Download from '@material-ui/icons/VerticalAlignBottom';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExposurePlus1 from '@material-ui/icons/ExposurePlus1';
import Flower from '@material-ui/icons/LocalFlorist';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Inbox from '@material-ui/icons/Inbox';
import Laptop from '@material-ui/icons/Laptop';
import Lock from '@material-ui/icons/Lock';
import Mail from '@material-ui/icons/MailOutline';
import Reply from '@material-ui/icons/Reply';
import Send from '@material-ui/icons/Send';
import ShowChart from '@material-ui/icons/ShowChart';
import Star from '@material-ui/icons/Star';
import StarOutline from '@material-ui/icons/StarBorder';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Warning from '@material-ui/icons/Warning';

import {
  Add,
  ArrowCarouselNext,
  ArrowCarouselPrev,
  ArrowDown,
  ArrowNext,
  ArrowPrev,
  Calculate,
  Calendar,
  Cancel,
  Chat,
  Checkmark,
  CloseMenu,
  Edit,
  EmailTips,
  Escrow,
  Filter,
  HamburgerMenu,
  Help,
  Home,
  Important,
  InfoDot,
  LearningCenter,
  Logout,
  Messaging,
  MessagingUnread,
  Mia,
  Minus,
  ModalAlert,
  MortgageLogo,
  MultipleDevicesTip,
  MultipleLoansTips,
  Payments,
  Payoff,
  Phone,
  Plus,
  Print,
  Profile,
  Refresh,
  Statements,
  TransHistory,
  Trash,
  Video,
  ViewEye,
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
    add: Add,
    alarm: Alarm,
    arrowCarouselNext: ArrowCarouselNext,
    arrowCarouselPrev: ArrowCarouselPrev,
    arrowDown: ArrowDown,
    arrowDropDown: ArrowDropDown,
    arrowNext: ArrowNext,
    arrowPrev: ArrowPrev,
    arrowUp: ArrowDropUp,
    block: Block,
    calculate: Calculate,
    calendar: Calendar,
    cancel: Cancel,
    chat: Chat,
    checkMark: Checkmark,
    closeMenu: CloseMenu,
    create: Create,
    dollar: AttachMoney,
    download: Download,
    edit: Edit,
    emailTips: EmailTips,
    escrow: Escrow,
    expandMore: ExpandMore,
    exposurePlus1: ExposurePlus1,
    filter: Filter,
    flower: Flower,
    hamburgerMenu: HamburgerMenu,
    help: Help,
    highlightOff: HighlightOff,
    home: Home,
    important: Important,
    inbox: Inbox,
    infoDot: InfoDot,
    learningCenter: LearningCenter,
    lock: Lock,
    logout: Logout,
    mail: Mail,
    messaging: Messaging,
    messagingUnread: MessagingUnread,
    mia: Mia,
    minus: Minus,
    modalAlert: ModalAlert,
    mortgageLogo: MortgageLogo,
    multipleDevicesTip: MultipleDevicesTip,
    multipleLoansTips: MultipleLoansTips,
    paperless: Laptop,
    payments: Payments,
    payoff: Payoff,
    phone: Phone,
    plus: Plus,
    plus1: ExposurePlus1,
    print: Print,
    profile: Profile,
    refresh: Refresh,
    reply: Reply,
    send: Send,
    showChart: ShowChart,
    star: Star,
    starOutline: StarOutline,
    statements: Statements,
    successOutline: CheckCircleOutline,
    transHistory: TransHistory,
    trash: Trash,
    video: Video,
    viewEye: ViewEye,
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
