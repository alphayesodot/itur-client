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

  return (
    <DashboardCard className={classes.root}>
      <Typography className={classes.date}>
        {getDatePreview(new Date())}
      </Typography>
      <List className={classes.list}>
        {[0, 1, 2].map(() => (
          <ListItem className={classes.item}>
            <ScheduleCard />
          </ListItem>
        ))}
      </List>
    </DashboardCard>
  );
};

export default TrackBoard;
