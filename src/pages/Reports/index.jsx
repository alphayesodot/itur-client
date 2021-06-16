import React from 'react';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import InputsRow from './components/InputsRow/InputsRow';
import useStyles from './index.styles';

const Reports = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleOnClick = () => {
    console.log('get report');
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        {t('title.reports')}
      </Typography>
      <InputsRow onClick={handleOnClick} />
    </div>
  );
};

export default Reports;
