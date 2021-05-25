import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress, List, ListItem, Typography } from '@material-ui/core';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (nodeGroup) {
      setIsLoading(true);
      Promise.all(
        nodeGroup.usersIds.map((userId) => UserService.getUserById(userId)),
      ).then((res) => {
        setInterviewers(res);
      }).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
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
      {date.toLocaleDateString('en-GB').replace(/\//g, '.')}
    </>
  );

  return (
    <DashboardCard className={classes.root}>
      <Typography className={classes.date}>
        {getDatePreview()}
      </Typography>
      {isLoading ? (
        <Backdrop open className={classes.backdrop}>
          <CircularProgress color='primary' />
        </Backdrop>
      ) : (
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
      )}
    </DashboardCard>
  );
};

export default TrackBoard;
