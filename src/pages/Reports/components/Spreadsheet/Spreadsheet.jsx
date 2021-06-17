import React, { useState, useEffect } from 'react';
import { Input } from '@material-ui/core';
import Spreadsheet from 'react-spreadsheet';
import csv from 'csvtojson';
import useStyles from './Spreadsheet.styles';

const SpreadsheetComponent = ({ data }) => {
  const classes = useStyles();
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
      <Spreadsheet data={spreadsheetData} />
    </div>
  );
};

export default SpreadsheetComponent;
