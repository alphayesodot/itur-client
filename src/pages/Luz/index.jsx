import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import UserStore from '../../stores/User.store';
import ScheduleStore from '../../stores/Schedule.store';
import InterviewRaw from './components/InterviewRaw/InterviewRaw';
import NodeGroupService from '../../services/nodeGroup.service';
import Title from './components/Title/Title';
import useStyles from './index.styles';
import InterviewsList from '../../common/InterviewsList/InterviewsList';

const Luz = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [interviews, setInterviews] = useState([]);
  const [nodeGroup, setNodeGroup] = useState();
  const currentUser = UserStore.userProfile;

  useEffect(() => {
    NodeGroupService.getNodeGroups().then((res) => {
      setNodeGroup(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  useEffect(() => {
    if (nodeGroup) {
      ScheduleStore.getScheduleOfInterviewer(
        new Date(),
        nodeGroup.id,
        currentUser.userID,
      ).then((res) => {
        setInterviews(res);
      }).catch(() => {
        toast(t('error.server'));
      });
    }
  }, [nodeGroup]);

  return (
    <DashboardCard className={classes.root}>
      <Title
        interviewsCount={interviews?.length}
        nodeGroupName={nodeGroup?.name}
      />
      <div className={classes.list}>
        {interviews?.length
          ? <InterviewsList interviews={interviews} InterviewItem={InterviewRaw} />
          : <Typography className={classes.message}>{t('message.noInterviews')}</Typography>}
      </div>
    </DashboardCard>
  );
};

export default Luz;
