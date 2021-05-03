import React, { useEffect, useState } from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import useStyles from './TrackBoard.styles';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import UserService from '../../../../services/user.service';
import ScheduleCard from '../ScheduleCard/ScheduleCard';

const TrackBoard = ({ nodeGroup, date }) => {
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

  const getDatePreview = () => (
    <>
      {t('title.day')}
      {' '}
      {t(`day.${date.getDay() + 1}`)}
      {' '}
      {'//'}
      {' '}
      {date.toLocaleDateString('en-GB').replaceAll('/', '.')}
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
                nodeGroupId={nodeGroup._id}
              />
            </ListItem>
          ))}
      </List>
    </DashboardCard>
  );
};

export default TrackBoard;
