import React from 'react';
import styled from 'styled-components';

// MATERIAL-UI ICONS
import Star from '@material-ui/icons/Star';
import StarOutline from '@material-ui/icons/StarBorder';
import Download from '@material-ui/icons/VerticalAlignBottom';
import Lock from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Block from '@material-ui/icons/Block';
import Create from '@material-ui/icons/Create';
import Inbox from '@material-ui/icons/Inbox';
import Reply from '@material-ui/icons/Reply';
import Send from '@material-ui/icons/Send';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Warning from '@material-ui/icons/Warning';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Laptop from '@material-ui/icons/Laptop';
import Alarm from '@material-ui/icons/Alarm';
import Mail from '@material-ui/icons/MailOutline';
import Flower from '@material-ui/icons/LocalFlorist';
import { ArrowDropUp } from './svg/materialUiIcons';
import Add from './svg/Add';
import ArrowCarouselNext from './svg/ArrowCarouselNext';
import ArrowCarouselPrev from './svg/ArrowCarouselPrev';
import ArrowDown from './svg/ArrowDown';
import ArrowNext from './svg/ArrowNext';
import ArrowPrev from './svg/ArrowPrev';
import Calculate from './svg/Calculate';
import Calendar from './svg/Calendar';
import Cancel from './svg/Cancel';
import Chat from './svg/Chat';
import Checkmark from './svg/CheckMark';
import CloseMenu from './svg/CloseMenu';
import Edit from './svg/Edit';
import EmailTips from './svg/EmailTips';
import Escrow from './svg/Escrow';
import Filter from './svg/Filter';
import HamburgerMenu from './svg/HamburgerMenu';
import Help from './svg/Help';
import Home from './svg/Home';
import Important from './svg/Important';
import InfoDot from './svg/InfoDot';
import LearningCenter from './svg/LearningCenter';
import Logout from './svg/Logout';
import Messaging from './svg/Messaging';
import MessagingUnread from './svg/MessagingUnread';
import Mia from './svg/Mia';
import Minus from './svg/Minus';
import ModalAlert from './svg/ModalAlert';
import MortgageLogo from './svg/MortgageLogo';
import MultipleDevicesTip from './svg/MultipleDevicesTip';
import MultipleLoansTips from './svg/MultipleLoansTips';
import Payments from './svg/Payments';
import Payoff from './svg/Payoff';
import Phone from './svg/Phone';
import Plus from './svg/Plus';
import Print from './svg/Print';
import Profile from './svg/Profile';
import Refresh from './svg/Refresh';
import Statements from './svg/Statements';
import TransHistory from './svg/TransHistory';
import Trash from './svg/Trash';
import Video from './svg/Video';
import ViewEye from './svg/ViewEye';

import { iconStyle, iconSize } from '../defaultStyleHelper';

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
