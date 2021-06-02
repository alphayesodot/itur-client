import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import InterviewStatusIcon from '../../../../common/InterviewStatusIcon/InterviewStatusIcon';
import useStyles from './InterviewRaw.styles';

const InterviewRaw = ({ interview }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      {JSON.stringify(interview)}
      {/* <InterviewStatusIcon status={} /> */}
    </DashboardCard>
  );
};

export default InterviewRaw;
