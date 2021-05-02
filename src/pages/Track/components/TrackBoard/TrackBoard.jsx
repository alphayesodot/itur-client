import React, { useEffect, useState } from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import useStyles from './TrackBoard.styles';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import UserService from '../../../../services/user.service';
import ScheduleCard from '../ScheduleCard/ScheduleCard';

const TrackBoard = ({ nodeGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [interviewers, setInterviewers] = useState([]);

  // TODO: Add loader
  useEffect(() => {
    if (nodeGroup) {
      Promise.all(
        nodeGroup.usersIds.map((userId) => UserService.getUserById(userId)),
      ).then((res) => {
        setInterviewers(res);
      }).catch(() => {
        toast(t('error.server'));
      });
    }
  }, [nodeGroup]);

  const getDatePreview = (date) => (
    <>
      {t('title.day')}
      {' '}
      {t(`day.${date.getDay() + 1}`)}
      {' '}
      {'//'}
      {' '}
      {date.toLocaleDateString('en-GB').replaceAll('/', '.')}
      {' '}
      {'//'}
      {' '}
      {date.toLocaleTimeString('en-US', { hour12: false,
        hour: 'numeric',
        minute: 'numeric' })}
    </>
  );

  const interviews = [{ time: '2021-04-22T13:00:07.996+00:00', name: 'חיים כהן' }, { time: '2021-04-22T10:30:07.996+00:00', name: 'מלכה כהן' }, { time: '2021-04-22T12:30:07.996+00:00', name: 'אסי עזר', results: { notes: [] } }];

  return (
    <DashboardCard className={classes.root}>
      <Typography className={classes.date}>
        {getDatePreview(new Date())}
      </Typography>
      <List className={classes.list}>
        {interviewers.length === 0
          ? (
            <Typography className={classes.message}>
              {t('message.noInterviewersInNodeGroup')}
            </Typography>
          )
          : interviewers.map((user) => (
            <ListItem key={user.name} className={classes.item}>
              {/* TODO: Get interviews from store by interviewer id */}
              <ScheduleCard user={user} interviews={interviews} />
            </ListItem>
          ))}
      </List>
    </DashboardCard>
  );
};

export default TrackBoard;
