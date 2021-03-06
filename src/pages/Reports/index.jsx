import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { CSVLink } from 'react-csv';
import ReportService from '../../services/report.service';
import Header from './components/Header/Header';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import useStyles from './index.styles';
import SpreadsheetComponent from './components/Spreadsheet/Spreadsheet';

const Reports = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const btnRef = useRef(null);

  const handleOnClick = (name, nodeGroupIds, unitIds, startDate, endDate) => {
    ReportService.createReport(nodeGroupIds, unitIds, startDate, endDate).then((data) => {
      setFile(data);
      setFileName(name);
      btnRef?.current?.click();
    }).catch(() => {
      toast(t('error.server'));
    });
  };

  return (
    <div className={classes.root}>
      <Header onClick={handleOnClick} resetData={() => setFile(null)} />
      <DashboardCard className={classes.dashboard}>
        {file && (
          <CSVLink filename={`${fileName}.csv`} data={file}>
            <span ref={btnRef} />
          </CSVLink>
        )}
        <SpreadsheetComponent data={file} />
      </DashboardCard>
    </div>
  );
};

export default Reports;
