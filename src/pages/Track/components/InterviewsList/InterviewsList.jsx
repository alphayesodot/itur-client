/* eslint-disable no-unused-vars */
import React from 'react';
import { List, ListItem, Divider, Typography, Avatar, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DONE from '../../../../utils/images/passed-positive.svg';
import CANCELED from '../../../../utils/images/passed-negative.svg';
import BREAK from '../../../../utils/images/break.svg';
import useStyles from './InterviewsList.styles';

const InterviewsList = ({ interviews }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  // const hasPassed = (time) => new Date().getTime() < time.getTime();
  const getTimeStatus = (time) => 'PAST';

  const getInterviewStatus = (interview) => {
    if (interview) {
      const timeStatus = getTimeStatus(interview.time);
      switch (timeStatus) {
        case 'PAST':
          return interview.isOccured ? 'DONE' : 'CANCELED';
        case 'PRESENT':
          return 'CURRENT';
        case 'FUTURE':
          return 'FUTURE';
        default:
      }
    }
    return 'BREAK';
  };

  const getIcon = (interviewStatus) => {
    switch (interviewStatus) {
      case 'DONE':
        return DONE;
      case 'CANCELED':
        return CANCELED;
      case 'BREAK':
        return BREAK;
      // case 'CURRENT':
      //   return CURRENT;
      default:
        return undefined;
    }
  };

  return (
    <div className={classes.root}>
      <List>
        {interviews.map((interview) => (
          <>
            <ListItem>
              <Typography className={classes.time}>
                {interview.time}
              </Typography>
              {interview.name && (
              <Typography className={classes.name}>
                {interview.name}
              </Typography>
              )}
              { getIcon(getInterviewStatus(interview)) && (
              <Tooltip arrow placement='right-end' title={t(`interviewStatus.${getInterviewStatus(interview)}`)}>
                <Avatar alt='avatar' src={getIcon(getInterviewStatus(interview))} className={classes.avatar} />
              </Tooltip>
              )}
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
};

export default InterviewsList;
