import React, { useState } from 'react';
import MalshabData from './components/MalshabData/MalshabData';
import Header from './components/Header/Header';
import useStyles from './index.styles';

const MalshabSearch = () => {
  const classes = useStyles();
  const [malshab, setMalshab] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classes.root}>
      <Header malshab={malshab} setMalshab={setMalshab} setIsLoading={setIsLoading} />
      <MalshabData isLoading={isLoading} malshab={malshab} />
    </div>
  );
};

export default MalshabSearch;
