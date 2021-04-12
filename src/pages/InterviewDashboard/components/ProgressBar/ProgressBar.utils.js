import moment from 'moment';

const getMinutesPassedDate = (date) => {
  const now = moment(new Date());
  const interviewStartDate = date;
  const duration = moment.duration(now.diff(interviewStartDate));
  return duration.asMinutes();
};

const getStepByMinutesPassed = (date) => {
  const diff = getMinutesPassedDate(date);
  if (diff >= 35) return 4;
  if (diff >= 30) return 3;
  if (diff >= 20) return 2;
  if (diff >= 10) return 1;
  return 0;
};

export default getStepByMinutesPassed;
