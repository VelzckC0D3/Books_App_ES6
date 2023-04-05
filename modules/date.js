import { DateTime } from '../luxon/src/luxon.js';

const getFormattedDateTime = () => {
  const dt = DateTime.now();
  const formattedDate = dt.toFormat('LLLL dd yyyy, hh:mm a');

  return formattedDate;
};

export default getFormattedDateTime;
