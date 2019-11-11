import { useState } from 'react';

export const useDateRange = (start, end) => {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);

  const handleDateChange = ({ e: { target: { id, value } } }) => {
    if (id === 'start') {
      setStartDate(value);
    } else if (id === 'end') {
      setEndDate(value);
    }
  };
  return [startDate, endDate, handleDateChange];
};
