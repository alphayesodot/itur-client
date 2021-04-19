/* eslint-disable arrow-body-style */
import { List, ListItem, Divider, Typography, Avatar, Tooltip } from '@material-ui/core';
import React from 'react';
import occured from '../../../../utils/images/passed-positive.svg';
import useStyles from './InterviewsList.styles';

const InterviewsList = ({ interviews }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {interviews.map((interview) => (
          <>
            <ListItem>
              <Typography className={classes.time}>
                {interview.time}
              </Typography>
              <Typography className={classes.name}>
                {interview.name}
              </Typography>
              <Tooltip arrow placement='right-end' title='הפגישה התקיימה'>
                <Avatar alt='avatar' src={occured} className={classes.avatar} />
              </Tooltip>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
};

export default InterviewsList;
