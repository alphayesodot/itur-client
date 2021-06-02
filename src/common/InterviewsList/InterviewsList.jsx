import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import useStyles from './InterviewsList.styles';

const timeDifference = 1800000; // 30 minutes

const InterviewsList = ({ interviews, InterviewItem }) => {
  const classes = useStyles();
  const [expandedInterviews, setExpandedInterviews] = useState([]);

  const getTimeStatus = (time) => {
    if (new Date().getTime() < new Date(time).getTime()) {
      return 'FUTURE';
    }
    if (new Date().getTime() < (new Date(time).getTime() + timeDifference)) {
      return 'PRESENT';
    }
    return 'PAST';
  };

  const hasInterviewDone = (interview) => (
    Object.values(interview.results).some((value) => !value || !value.length)
  );

  const getInterviewStatus = (interview) => {
    const timeStatus = getTimeStatus(interview.time);
    switch (timeStatus) {
      case 'PAST':
        return hasInterviewDone(interview) ? 'DONE' : 'CANCELED';
      case 'PRESENT':
        return 'DURING';
      case 'FUTURE':
        return 'FUTURE';
      default:
        return undefined;
    }
  };

  useEffect(() => {
    setExpandedInterviews(() => {
      const minTime = Math.min(
        ...interviews.map((prevInterview) => new Date(prevInterview.time).getTime()),
      );
      const maxTime = Math.max(
        ...interviews.map((prevInterview) => new Date(prevInterview.time).getTime()),
      );
      const timeSegments = [];
      for (let time = minTime; time <= maxTime; time += timeDifference) {
        timeSegments.push(time);
      }

      const sections = timeSegments.map((timeSegment) => {
        const interview = interviews.find(
          (prevInterview) => new Date(prevInterview.time).getTime() === timeSegment,
        );
        return interview
          ? { ...interview, status: getInterviewStatus(interview) }
          : { time: timeSegment, status: 'BREAK' };
      });

      return sections.sort(
        (firstInterview, secondInterview) => new Date(firstInterview.time).getTime()
          - new Date(secondInterview.time).getTime(),
      );
    });
  }, [interviews]);

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {expandedInterviews.map(({ malshabShort, time, status }) => (
          <div key={`${time}~${status}`}>
            <InterviewItem
              status={status}
              time={new Date(time)}
              malshabShort={malshabShort}
            />
          </div>
        ))}
      </List>
    </div>
  );
};

export default InterviewsList;
