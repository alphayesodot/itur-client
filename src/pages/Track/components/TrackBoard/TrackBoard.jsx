import React from 'react';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './TrackBoard.styles';

const TrackBoard = () => {
  const classes = useStyles();

  return (
    <DashboardCard
      className={classes.root}
      width='95%'
      height='65vh'
      mt='1em'
    />
  );
};

export default TrackBoard;
