import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ssLightGrey } from '../defaultStyleHelper';

function MultipleDevicesTip(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M384.6 271.7V91.1c0-12.4-12.1-22.6-26.9-22.6h-269c-14.8 0-26.9 10.2-26.9 22.6v180.6H8v67.7h430.4v-67.7h-53.8zM277 316.8H169.4v-22.6H277v22.6zm80.7-45.1h-269V91.1h269.1l-.1 180.6z" />
      <path d="M466.4 167.5H351.8c-13.5 0-24.6 11-24.6 24.6v212.8c0 13.5 11 24.6 24.6 24.6h114.6c13.5 0 24.6-11 24.6-24.6V192c0-13.5-11-24.5-24.6-24.5zm-90 12.2h65.5v8.2h-65.5v-8.2zm32.7 233.4c-9.1 0-16.4-7.3-16.4-16.4s7.3-16.4 16.4-16.4c9.1 0 16.4 7.3 16.4 16.4s-7.3 16.4-16.4 16.4zm65.5-49.2h-131V200.2h131v163.7z" />
      <path d="M343.6 200.2h131v163.7h-131z" fill={ssLightGrey} />
    </SvgIcon>
  );
}

export default MultipleDevicesTip;
