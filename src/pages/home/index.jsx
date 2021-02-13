import React from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import useStyles from './index.styles';

const Home = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const notify = () => toast('Example');

  return (
    <div className={classes.root}>
      <Typography className={classes.headline}>{t('title.example')}</Typography>
      <button type="submit" onClick={notify}>
        Notify Example !
      </button>
    </div>
  );
};

export default Home;
