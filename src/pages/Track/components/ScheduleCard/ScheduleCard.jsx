import React from 'react';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './ScheduleCard.styles';

const ScheduleCard = () => {
  const classes = useStyles();

  return (
    <DashboardCard className={classes.root} />
  );
};

export default ScheduleCard;
