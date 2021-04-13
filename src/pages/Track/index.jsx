import React from 'react';
import Header from './components/Header/Header';
import TrackBoard from './components/TrackBoard/TrackBoard';
import useStyles from './index.styles';

const Track = () => {
  const classes = useStyles();

  // TODO: Get unit from current user
  return (
    <div className={classes.root}>
      <Header unitName='ספיר' />
      <TrackBoard />
    </div>
  );
};

export default Track;
