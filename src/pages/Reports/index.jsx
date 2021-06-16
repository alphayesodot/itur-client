import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { CSVLink } from 'react-csv';
import { Typography } from '@material-ui/core';
import ReportService from '../../services/report.service';
import InputsRow from './components/InputsRow/InputsRow';
import useStyles from './index.styles';

const Reports = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [file, setFile] = useState();
  const btnRef = useRef(null);

  const handleOnClick = (name, nodeGroup, unit, startDate, endDate) => {
    ReportService.createReport(name, nodeGroup, unit, startDate, endDate).then((data) => {
      setFile(data);
      btnRef?.current?.click();
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
      {file && (
      <CSVLink filename='file.csv' data={file}>
        <span ref={btnRef} />
      </CSVLink>
      )}
    </div>
  );
};

export default Reports;
