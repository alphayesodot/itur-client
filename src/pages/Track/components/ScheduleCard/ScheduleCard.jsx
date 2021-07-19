import React, { useState, useEffect } from 'react';
import { Avatar, Typography, Tooltip } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import avatar from '../../../../utils/images/schedule/userpic-blue.svg';
import useStyles from './ScheduleCard.styles';
import InterviewsList from '../../../../common/InterviewsList/InterviewsList';
import InterviewItem from '../InterviewItem/InterviewItem';
import ScheduleStore from '../../../../stores/Schedule.store';

const ScheduleCard = ({ interviewer, date, nodeGroupId }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    ScheduleStore.getScheduleOfInterviewer(
      date,
      nodeGroupId,
      interviewer.id,
    ).then((res) => {
      setInterviews(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, [ScheduleStore.schedules, nodeGroupId, date]);

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.title}>
        <div className={classes.info}>
          <Typography className={classes.name}>
            {interviewer.name}
          </Typography>
          <Tooltip title={interviewer.mail}>
            <Typography className={classes.mail}>
              {interviewer.mail}
            </Typography>
          </Tooltip>
        </div>
        <div className={classes.iconDiv}>
          <Avatar alt={interviewer.name} src={avatar} />
        </div>
      </div>
      <InterviewsList interviews={interviews} InterviewItem={InterviewItem} />
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
