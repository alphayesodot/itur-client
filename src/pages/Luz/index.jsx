import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Typography, CircularProgress, Backdrop } from '@material-ui/core';
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
  const [isLoading, setIsLoading] = useState(false);
  const [interviews, setInterviews] = useState([]);
  const [nodeGroup, setNodeGroup] = useState();
  const currentUser = UserStore.userProfile;

  useEffect(() => {
    setIsLoading(true);
    NodeGroupService.getNodeGroups().then((res) => {
      setNodeGroup(res);
    }).catch(() => {
      toast(t('error.server'));
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (nodeGroup) {
      setIsLoading(true);
      ScheduleStore.getScheduleOfInterviewer(
        new Date(),
        nodeGroup.id,
        currentUser.userID,
      ).then((res) => {
        setInterviews(res);
      }).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [nodeGroup]);

  return (
    <DashboardCard className={classes.root}>
      <Title
        interviewsCount={interviews?.length}
        nodeGroupName={nodeGroup?.name}
      />
      {isLoading
        ? (
          <Backdrop open className={classes.backdrop}>
            <CircularProgress color='primary' />
          </Backdrop>
        )
        : (
          <div className={classes.list}>
            {interviews?.length
              ? <InterviewsList interviews={interviews} InterviewItem={InterviewRaw} />
              : <Typography className={classes.message}>{t('message.noInterviews')}</Typography>}
          </div>
        )}
    </DashboardCard>
  );
};

export default Luz;
