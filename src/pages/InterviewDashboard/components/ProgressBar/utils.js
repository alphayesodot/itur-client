import moment from 'moment';

const getMinutesDiffFromDate = (date) => {
  const now = moment(new Date());
  const interviewStartDate = date;
  const duration = moment.duration(now.diff(interviewStartDate));
  return duration.asMinutes();
};

const getMinutesPassedStep = () => {
  
};

export default getMinutesDiffFromDate;
