import React from 'react';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import UserStore from '../../stores/User.store';
import Title from './components/Title/Title';
import useStyles from './index.styles';

const Luz = () => {
  const classes = useStyles();
  const currentUser = UserStore.userProfile;

  return (
    <DashboardCard className={classes.root}>
      <Title interviewsCount={5} />
    </DashboardCard>
  );
};

export default Luz;
