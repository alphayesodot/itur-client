import React from 'react';
import Header from './components/Header/Header';
import useStyles from './index.styles';

const Track = () => {
  const classes = useStyles();

  // TODO: Get unit from current user
  return (
    <div className={classes.root}>
      <Header unit='ספיר' />
    </div>
  );
};

export default Track;