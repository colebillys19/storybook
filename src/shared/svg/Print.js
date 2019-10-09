import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Print(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M128.5 38.1h241v60.2h-241V38.1zm331.4 90.4H38.1C21.6 128.5 8 142.1 8 158.6v150.6c0 16.6 13.6 30.1 30.1 30.1h90.4v120.5h241V339.4h90.4c16.6 0 30.1-13.6 30.1-30.1V158.6c0-16.5-13.6-30.1-30.1-30.1zM339.4 429.8H158.6V279.1h180.8v150.7zm127.3-256.1c0 12.1-9.8 21.8-21.8 21.8s-21.8-9.8-21.8-21.8 9.8-21.8 21.8-21.8 21.8 9.7 21.8 21.8z" />
    </SvgIcon>
  );
}

export default Print;
