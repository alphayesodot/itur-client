/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { List, ListItem, Divider, Typography, Avatar, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DONE from '../../../../utils/images/passed-positive.svg';
import CANCELED from '../../../../utils/images/passed-negative.svg';
import BREAK from '../../../../utils/images/break.svg';
import DURING from '../../../../utils/images/during.svg';
import useStyles from './InterviewsList.styles';

const timeDifference = 1800000; // 30 minutes

const InterviewsList = ({ interviews }) => {
  const classes = useStyles();
  const [expandedInterviews, setExpandedInterviews] = useState(interviews);
  const { t } = useTranslation();

  // eslint-disable-next-line arrow-body-style
  const getTimeStatus = (time) => {
    // new Date().getTime() < new Date(time).getTime();
    return 'PAST';
  };

  const getInterviewStatus = (interview) => {
    if (interview) {
      const timeStatus = getTimeStatus(interview.time);
      switch (timeStatus) {
        case 'PAST':
          return interview.isOccured ? 'DONE' : 'CANCELED';
        case 'PRESENT':
          return 'DURING';
        case 'FUTURE':
          return 'FUTURE';
        default:
      }
    }
    return 'BREAK';
  };

  const getExpandedInterviews = (prevInterviews) => {
    const minTime = Math.min(
      ...prevInterviews.map((prevInterview) => new Date(prevInterview.time).getTime()),
    );
    const maxTime = Math.max(
      ...prevInterviews.map((prevInterview) => new Date(prevInterview.time).getTime()),
    );
    const timeSegments = [];
    for (let time = minTime; time <= maxTime; time += timeDifference) {
      timeSegments.push(time);
    }

    const res = timeSegments.map((timeSegment) => {
      const interview = prevInterviews.find(
        (prevInterview) => new Date(prevInterview.time).getTime() === timeSegment,
      );
      return interview ? { ...interview, status: getInterviewStatus(interview) } : { time: timeSegment, status: 'BREAK' };
    });

    return res.sort(
      (firstInterview, secondInterview) => new Date(firstInterview.time).getTime()
          - new Date(secondInterview.time).getTime(),
    );
  };

  useEffect(() => {
    setExpandedInterviews((prevInterviews) => getExpandedInterviews(prevInterviews));
  }, []);

  const getIcon = (interviewStatus) => {
    switch (interviewStatus) {
      case 'DONE':
        return DONE;
      case 'CANCELED':
        return CANCELED;
      case 'BREAK':
        return BREAK;
      case 'DURING':
        return DURING;
      default:
        return undefined;
    }
  };

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {expandedInterviews.map(({ name, time, status }) => (
          <div key={`${name}-${time}`}>
            <ListItem className={classes[`item${status}`]}>
              <Typography className={`${classes.time} ${classes[`time${status}`]}`}>
                {new Date(time).toTimeString().split(' ')[0].slice(0, 5)}
              </Typography>
              {name && (
                <Typography className={`${classes.name} ${classes[`name${status}`]}`}>
                  {name}
                </Typography>
              )}
              { getIcon(status) && (
                <Tooltip arrow placement='right-end' title={t(`interviewStatus.${status}`)}>
                  <Avatar alt='avatar' src={getIcon(status)} className={classes.avatar} />
                </Tooltip>
              )}
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default InterviewsList;
