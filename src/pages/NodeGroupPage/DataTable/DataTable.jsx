import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import useStyles from './DataTable.styles';

const DataTable = ({ rowsData, colomnsNames }) => {
  const classes = useStyles();
  return (
    <Table aria-label='simple table' className={classes.root}>
      <TableHead className={classes.title}>
        <TableRow>
          {colomnsNames.map((colName) => <TableCell key={colName} classsName={classes.cell} align='center'>{colName}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {rowsData.map((row) => (
          <TableRow key={row.name} className={classes.row}>
            {row.map((cell) => <TableCell className={classes.cell} align='center'>{cell}</TableCell>) }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
