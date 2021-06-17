import React, { useState, useEffect } from 'react';
import { Input, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Spreadsheet from 'react-spreadsheet';
import csv from 'csvtojson';
import useStyles from './Spreadsheet.styles';

const SpreadsheetComponent = ({ data }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [spreadsheetData, setSpreadsheetData] = useState([]);

  const RangeView = ({ cell }) => (
    <Input
      type='text'
      value={cell.value}
      disabled
      className={classes.input}
    />
  );

  useEffect(() => {
    if (data) {
      csv({
        noheader: true,
        output: 'csv',
      })
        .fromString(data)
        .then((csvRows) => {
          setSpreadsheetData(csvRows.map((csvRow) => csvRow.map((value) => ({
            value,
            DataViewer: RangeView,
          }))));
        });
    }
  }, [data]);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        {t('title.view')}
      </Typography>
      {data
        ? <Spreadsheet data={spreadsheetData} />
        : (
          <Typography className={classes.message}>
            {t('message.noReport')}
          </Typography>
        )}
    </div>
  );
};

export default SpreadsheetComponent;
