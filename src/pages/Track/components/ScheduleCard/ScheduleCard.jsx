import React, { useState, useEffect } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import avatar from '../../../../utils/images/userpic-blue.svg';
import useStyles from './ScheduleCard.styles';
import InterviewsList from '../InterviewsList/InterviewsList';
import ScheduleStore from '../../../../stores/Schedule.store';

const ScheduleCard = ({ interviewer, date, nodeGroupId }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    setInterviews(ScheduleStore.getScheduleOfInterviewer(
      date,
      nodeGroupId,
      interviewer._id,
    ));
  }, [ScheduleStore.schedules, nodeGroupId, date]);

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.title}>
        <Avatar alt='avatar' src={avatar} className={classes.avatar} />
        <Typography className={classes.name}>
          {interviewer.name}
        </Typography>
      </div>
      <InterviewsList interviews={interviews} />
      <div className={classes.interviewsCount}>
        <Typography>
          {interviews.length === 0 && <strong>{t('title.noInterviews')}</strong>}
          {interviews.length === 1 && <strong>{t('title.oneInterview')}</strong>}
          {interviews.length > 1 && (
          <>
            <strong>{t('title.interviewsCount')}</strong>
            {' '}
            {interviews.length}
          </>
          )}
        </Typography>
      </div>
    </DashboardCard>
  );
};

export default ScheduleCard;
