import React from 'react';
import Header from './components/header/header';
import useStyles from './index.styles';

const Track = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
};

export default Track;
