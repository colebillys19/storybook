import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function InfoDot(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M252 3C116.1 3 6 113.1 6 249s110.1 246 246 246 246-110.1 246-246S387.9 3 252 3zm-37.9 64h83.5v82.4h-83.5V67zm125.3 365h-167v-38.7h41.7V238.7h-41.7v-43.5h125.2v198.2h41.7V432z" />
    </SvgIcon>
  );
}

export default InfoDot;
