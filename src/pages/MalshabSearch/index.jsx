import React, { useState } from 'react';
import MalshabData from './components/MalshabData/MalshabData';
import Header from './components/Header/Header';
import useStyles from './index.styles';

const MalshabSearch = () => {
  const classes = useStyles();
  const [malshab, setMalshab] = useState();

  return (
    <div className={classes.root}>
      <Header malshab={malshab} setMalshab={setMalshab} />
      <MalshabData malshab={malshab} />
    </div>
  );
};

export default MalshabSearch;
