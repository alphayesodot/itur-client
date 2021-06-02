import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListItem, Typography, Tooltip } from '@material-ui/core';
import InterviewStatusIcon from '../../../../common/InterviewStatusIcon/InterviewStatusIcon';
import useStylesInterviewRaw from '../../../../common/InterviewItem.styles';
import useStyles from './InterviewRaw.styles';

const InterviewRaw = ({ status, time, malshabShort, timeDifference }) => {
  const classes = useStyles();
  const interviewRawClasses = useStylesInterviewRaw();
  const { t } = useTranslation();

  return (
    <ListItem className={`${classes.root} ${interviewRawClasses.item} ${interviewRawClasses[`item${status}`]}`}>
      <Typography className={`${classes.identityNumber} ${classes[`identityNumber${status}`]}`}>
        {malshabShort && `${t('title.identityNumber')}: ${malshabShort.identityNumber}`}
      </Typography>
      <Tooltip
        placement='bottom-start'
        title={(malshabShort && `${malshabShort.firstName} ${malshabShort.lastName}`) || ''}
      >
        <Typography className={`${classes.name} ${interviewRawClasses.name} ${interviewRawClasses[`name${status}`]}`}>
          {malshabShort ? `${malshabShort.firstName} ${malshabShort.lastName}` : t('title.break')}
        </Typography>
      </Tooltip>
      <Typography className={`${classes.time} ${interviewRawClasses.time} ${interviewRawClasses[`time${status}`]}`}>
        {time.toTimeString().split(' ')[0].slice(0, 5)}
        -
        {new Date(time.getTime() + timeDifference).toTimeString().split(' ')[0].slice(0, 5)}
      </Typography>
      <div className={classes.icon}>
        <InterviewStatusIcon status={status} />
      </div>
    </ListItem>
  );
};

export default InterviewRaw;
