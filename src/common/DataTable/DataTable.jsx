import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';

import useStyles from './DataTable.styles';

/**
 *
 * @param {*} rowsData: array of row-data arrays.
 * @param {*} colomnsNames: array of coloms names (right to left).
 * @param {*} iconColomnsImages: array of icons that should be in an a non-named coloms.
 * @returns design table
 */
const DataTable = ({ rowsData, colomnsNames }) => {
  const classes = useStyles();
  const tableHeaderClasses = (idx, length) => {
    if (idx === 0) return classes.roundBorderRight;
    if (idx === length - 1) return classes.roundBorderLeft;
    return undefined;
  };
  return (
    <TableContainer className={classes.root}>
      <Table stickyHeader aria-label='sticky table' className={classes.table}>
        <TableHead className={classes.tableHeader}>
          <TableRow key='title'>
            {colomnsNames.map((colName, index) => <TableCell key={colName} className={`${classes.titleCell} ${tableHeaderClasses(index, colomnsNames.length)}`} align='center'>{colName}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableContent}>
          {rowsData.map((row, rowIndex) => (
            <TableRow key={row.id} className={classes.row}>
              {/* eslint-disable-next-line react/no-array-index-key */}
              {row.data.map((cell, cellIndex) => <TableCell key={`${rowIndex}-${cellIndex}`} className={classes.cell} align='center'>{cell}</TableCell>) }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default DataTable;
