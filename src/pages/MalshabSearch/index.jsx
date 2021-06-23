import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import MalshabData from './components/MalshabData/MalshabData';
import Header from './components/Header/Header';
import useStyles from './index.styles';

const MalshabSearch = () => {
  const classes = useStyles();
  const [malshab, setMalshab] = useState();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Header malshab={malshab} setMalshab={setMalshab} />
      <MalshabData malshab={malshab} />
    </div>
  );
};

export default MalshabSearch;
