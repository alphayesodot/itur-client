/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { List, ListItem, Divider, Typography, Avatar, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DONE from '../../../../utils/images/passed-positive.svg';
import CANCELED from '../../../../utils/images/passed-negative.svg';
import BREAK from '../../../../utils/images/break.svg';
import DURING from '../../../../utils/images/during.svg';
import useStyles from './InterviewsList.styles';

const InterviewsList = ({ interviews }) => {
  const classes = useStyles();
  const [expandedInterviews, setExpandedInterviews] = useState(interviews);
  const { t } = useTranslation();

  // const hasPassed = (time) => new Date().getTime() < time.getTime();
  const getTimeStatus = (time) => 'PRESENT';

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

  useEffect(() => {
    setExpandedInterviews((prevInterviews) => (
      prevInterviews.map((prevInterview) => ({
        ...prevInterview,
        status: getInterviewStatus(prevInterview),
      }))
    ));
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
                {time}
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
