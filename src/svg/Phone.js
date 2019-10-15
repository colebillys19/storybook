import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Phone(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M250 20C123 20 20 123 20 250s103 230 230 230 230-103 230-230S377 20 250 20zm74.4 354c-33.1 0-100.1-34-132.3-66.1-32.2-32.2-66.1-99.2-66.1-132.3 0 0 33.1-49.6 49.6-49.6s66.2 49.6 49.6 66.1-33.1 16.5-33.1 33.1 16.5 33.1 33.1 49.6c16.5 16.5 33.1 33.1 49.6 33.1s16.5-16.5 33.1-33.1c16.5-16.5 66.1 33.1 66.1 49.6S324.4 374 324.4 374z" />
    </SvgIcon>
  );
}

export default Phone;
