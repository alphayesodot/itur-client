import React, { useState, useEffect } from 'react';
import { Input, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import csv from 'csvtojson';
import Spreadsheet from 'react-spreadsheet';
import NoObjectsToShow from '../../../../common/NoObjectsToShow/NoObjectsToShow';
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
      {data
        ? (
          <div className={classes.content}>
            <Typography className={classes.title}>
              {t('title.view')}
            </Typography>
            <Spreadsheet data={spreadsheetData} />
          </div>
        )
        : <NoObjectsToShow title={t('message.noReport')} />}
    </div>
  );
};

export default SpreadsheetComponent;
