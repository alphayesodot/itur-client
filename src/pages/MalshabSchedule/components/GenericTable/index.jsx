/* eslint-disable max-len */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './index.styles';

function createData(name, calories, fat, carbs, protein, checked = false) {
  return { name, calories, fat, carbs, protein, checked };
}

const ROWS = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  const { columnData, rowsData } = props;
  const classes = useStyles();

  const [rows, setRows] = useState(rowsData.map((row) => ({ ...row, checked: false })));
  const [chooseAllRows, setChooseAllRows] = useState(false);

  const handleChange = (row) => {
    setRows((prevState) => (
      prevState.map((rowData) => ({
        ...rowData,
        checked: rowData.id === row.id ? !rowData.checked : rowData.checked,

      }))
    ));
  };

  const handleChooseAll = (event) => {
    console.log(event.target.checked);
    setRows((prevState) => (
      prevState.map((row) => ({ ...row, checked: event.target.checked }))
    ));

    setChooseAllRows(event.target.checked);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell><Checkbox checked={chooseAllRows} onChange={(event) => handleChooseAll(event)} /></TableCell>
            {columnData.map((column) => (
              <>
                <TableCell>{column.name}</TableCell>
              </>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox checked={row.checked} onChange={() => handleChange(row)} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.users}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
