import React, { useState, useEffect } from 'react';
import Spreadsheet from 'react-spreadsheet';
import csv from 'csvtojson';
import useStyles from './spreadsheet.styles';

const SpreadsheetComponent = ({ data }) => {
  const classes = useStyles();
  const [spreadsheetData, setSpreadsheetData] = useState([]);

  const RangeView = ({ cell }) => (
    <input
      type='text'
      value={cell.value}
      disabled
      clasName={classes.input}
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
