import React from 'react';
import { ListItem, Divider, Typography, Tooltip } from '@material-ui/core';
import useStyles from '../../../../common/InterviewItem/InterviewItem.styles';
import InterviewStatusIcon from '../../../../common/InterviewStatusIcon/InterviewStatusIcon';

const InterviewItem = ({ event }) => {
  const classes = useStyles();
  const { status, malshabShort, time } = event;

  return (
    <>
      <ListItem className={`${classes.item} ${classes[`item${status}`]}`}>
        <InterviewStatusIcon status={status} />
        <Tooltip
          placement='bottom-start'
          title={(malshabShort && `${malshabShort.firstName} ${malshabShort.lastName}`) || ''}
        >
          <Typography className={`${classes.name} ${classes[`name${status}`]}`}>
            {malshabShort && `${malshabShort.firstName} ${malshabShort.lastName}`}
          </Typography>
        </Tooltip>
        <Typography className={`${classes.time} ${classes[`time${status}`]}`}>
          {new Date(time).toTimeString().split(' ')[0].slice(0, 5)}
        </Typography>
      </ListItem>
      <Divider />
    </>
  );
};

export default InterviewItem;
