import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function HamburgerMenu(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path clipRule="evenodd" d="M7 381h484v-29.3H7V381zm0-117.3h484v-29.3H7v29.3zM7 117v29.3h484V117H7z" fillRule="evenodd" />
    </SvgIcon>
  );
}

export default HamburgerMenu;
