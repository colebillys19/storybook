import React from 'react';
import styled from 'styled-components';

// MATERIAL-UI ICONS
import {
  Add,
  Alarm,
  ArrowCarouselNext,
  ArrowCarouselPrev,
  ArrowDown,
  ArrowDropUp,
  ArrowNext,
  ArrowPrev,
  AttachMoney,
  Block,
  Calculate,
  Calendar,
  Cancel,
  Chat,
  CheckCircleOutline,
  Checkmark,
  CloseMenu,
  Create,
  Download,
  Edit,
  EmailTips,
  Escrow,
  Filter,
  Flower,
  HamburgerMenu,
  Help,
  Home,
  Important,
  Inbox,
  InfoDot,
  Laptop,
  LearningCenter,
  Lock,
  Logout,
  Mail,
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
  Reply,
  Send,
  Star,
  StarOutline,
  Statements,
  TransHistory,
  Trash,
  Video,
  ViewEye,
  Visibility,
  VisibilityOff,
  Warning,
} from '../svg';

import {
  ArrowDropDown,
  ExpandMore,
  ShowChart,
  VerticalAlignBottom,
} from '../svg/materialUiIcons';

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
    filter: Filter,
    flower: Flower,
    hamburgerMenu: HamburgerMenu,
    help: Help,
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
    verticalAlignBottom: VerticalAlignBottom,
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
