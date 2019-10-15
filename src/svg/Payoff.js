import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Payoff(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M145 440.7l196.1-114 12.7-129.1 73.6-83.8-106.8-92.6-74.1 91.1L116.4 169 38.7 471l149.4-189c-7-8.3-11.2-19-11.2-30.6 0-26.3 21.3-47.7 47.6-47.7s47.6 21.3 47.6 47.6-21.3 47.6-47.6 47.6c-6.6 0-12.9-1.3-18.6-3.8L93.7 440.7h-.6v.8l-.4.6v29l.4-.3v7.9h368.2v-38.1l-316.3.1z" />
    </SvgIcon>
  );
}

export default Payoff;
