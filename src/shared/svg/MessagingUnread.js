import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function MessagingUnread(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 567 500">
      <path d="M364.2 241.8L254 326.7l-118.2-88.1v-65.3H361z" />
      <path d="M460.1 291.4c-4.4 0-8.7-.3-13-.8v148.3c0 4.4-3.9 8.2-8.2 8.2H61.1c-4.4 0-8.2-3.8-8.2-8.2V200.7C78.5 176.9 74.7 178.9 193.5 87c12.8-10 38.2-34.1 56.2-34.1h.6c18 0 43.4 24.1 56.2 34.1 23 17.8 41.4 32 56.3 43.6 5.1-9.8 11.7-18.8 19.5-26.6-24.5-18.9-46.7-35.7-62.4-48.6C301.9 40.5 277 20 250.3 20h-.6c-26.7 0-51.6 20.5-69.6 35.4-36.4 30-97 72.4-149.6 121.2-6.7 6.2-10.5 14.9-10.5 24.1v238.2c0 22.6 18.5 41.1 41.1 41.1H439c22.6 0 41.1-18.5 41.1-41.1V289.6c-6.6 1.2-13.2 1.8-20 1.8z" />
      <path d="M250.3 348.6h-.6c-18 0-43.4-23.9-56.2-33.6-36.4-28-61.1-47-78.6-60.6-3.6-3.1-9-2.3-11.8 1.6l-9.5 13.3c-2.8 3.6-2.1 8.5 1.5 11.3 25.2 19.5 82.1 63.4 85 65.7 18.2 14.9 42.9 35.2 69.6 35.2h.6c26.7.2 51.3-20.3 69.6-35.2 2.6-2 61.6-47.5 87.3-67.5l.6-.6c-10-5.4-19.1-12.4-26.9-20.6-17.1 13.4-40.7 31.5-74.3 57.4-13 9.7-38.4 33.6-56.3 33.6z" />
      <circle cx="460.1" cy="181.5" fill="#ec1e27" r="69.6" />
    </SvgIcon>
  );
}

export default MessagingUnread;