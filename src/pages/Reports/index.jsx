import React from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import ReportService from '../../services/report.service';
import InputsRow from './components/InputsRow/InputsRow';
import useStyles from './index.styles';

const Reports = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleOnClick = (name, nodeGroup, unit, startDate, endDate) => {
    ReportService.createReport(name, nodeGroup, unit, startDate, endDate).then((data) => {
      const url = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${name}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(() => {
      toast(t('error.server'));
    });
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
