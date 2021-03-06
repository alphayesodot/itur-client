import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './TrackBoard.styles';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import ScheduleCard from '../ScheduleCard/ScheduleCard';

const TrackBoard = ({ nodeGroup, date, interviewers }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const getDatePreview = () => (
    <>
      {t('title.day')}
      {' '}
      {t(`day.${date.getDay() + 1}`)}
      {' '}
      {'//'}
      {' '}
      {date.toLocaleDateString('en-GB').replace(/\//g, '.')}
    </>
  );

  return (
    <DashboardCard className={classes.root}>
      <Typography className={classes.date}>
        {getDatePreview()}
      </Typography>
      <List className={classes.list}>
        {interviewers.length === 0
          ? (
            <Typography className={classes.message}>
              {t('message.noInterviewersInNodeGroup')}
            </Typography>
          )
          : interviewers.map((interviewer) => (
            <ListItem key={interviewer.name} className={classes.item}>
              <ScheduleCard
                interviewer={interviewer}
                date={date}
                nodeGroupId={nodeGroup.id}
              />
            </ListItem>
          ))}
      </List>
    </DashboardCard>
  );
};

export default TrackBoard;
