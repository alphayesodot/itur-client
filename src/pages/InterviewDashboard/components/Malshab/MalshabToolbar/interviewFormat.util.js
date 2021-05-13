const interviewDurationStrFormat = (startDate) => {
  let startHour = new Date(startDate).getHours();
  const startMinutes = new Date(startDate).getMinutes();
  const roundStartMinutes = Math.round(startMinutes / 30) * 30;
  const roundParsedStartMinutes = (Math.round(startMinutes / 30) * 30) % 60 || '00';
  let endHour = startHour;
  let endMinutes = startMinutes;
  switch (roundStartMinutes) {
    case 0:
      endMinutes = 30;
      break;
    case 30:
      endMinutes = '00';
      endHour++;
      break;
    case 60:
      startHour++;
      endHour++;
      endMinutes = 30;
      break;
    default:
      break;
  }
  return `${endHour}:${endMinutes} - ${startHour}:${roundParsedStartMinutes} `;
};

export default interviewDurationStrFormat;
