/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './index.styles';

export default function BasicTable({ tableData, handleChosenMalshabs }) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [chooseAllRows, setChooseAllRows] = useState(false);

  const handleChange = (row) => {
    setRows((prevState) => (
      prevState.map((rowData) => ({
        ...rowData,
        checked: rowData.id === row.id ? !rowData.checked : rowData.checked,

      }))
    ));
  };
  useEffect(() => {
    setRows(tableData?.rowsData.map((row) => ({ ...row, checked: false })));
  }, [tableData]);

  useEffect(() => {
    if (rows) {
      handleChosenMalshabs(rows.filter((rowData) => rowData.checked));
    }
  }, [rows]);

  const handleChooseAll = (event) => {
    setRows((prevState) => (
      prevState.map((row) => ({ ...row, checked: event.target.checked }))
    ));

    setChooseAllRows(event.target.checked);
  };

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table stickyHeader className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {tableData?.columnData.map((column) => (
              <React.Fragment key={column.name}>
                <TableCell>{column.name}</TableCell>
              </React.Fragment>
            ))}
            <TableCell><Checkbox checked={chooseAllRows} onChange={(event) => handleChooseAll(event)} /></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.users}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Checkbox checked={row.checked} onChange={() => handleChange(row)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
