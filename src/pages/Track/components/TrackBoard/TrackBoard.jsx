import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './TrackBoard.styles';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import ScheduleCard from '../ScheduleCard/ScheduleCard';

const TrackBoard = () => {
  const classes = useStyles();
  const { t } = useTranslation();

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

  const users = [
    { name: 'יוזר #1' },
    { name: 'יוזר #2' },
    { name: 'יוזר #3' },
    { name: 'יוזר #4' },
    { name: 'יוזר #5' },
    { name: 'יוזר #6' },
    { name: 'יוזר #7' },
  ];

  return (
    <DashboardCard className={classes.root}>
      <Typography className={classes.date}>
        {getDatePreview(new Date())}
      </Typography>
      <List className={classes.list}>
        {users.map((user) => (
          <ListItem key={user.name} className={classes.item}>
            <ScheduleCard user={user} interviews={[]} />
          </ListItem>
        ))}
      </List>
    </DashboardCard>
  );
};

export default TrackBoard;
