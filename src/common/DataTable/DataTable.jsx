import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import useStyles from './DataTable.styles';

/**
 * @param {*} rowsData: array of row-data arrays.
 * @param {*} colomnsNames: array of columns names (right to left).
 * @param {*} iconColomnsImages: array of icons that should be in an a non-named columns.
 * @returns design table
 */
const DataTable = ({ rowsData, colomnsNames }) => {
  const classes = useStyles();

  const tableHeaderClasses = (idx) => {
    if (idx === 0) return classes.roundBorderRight;
    return undefined;
  };

  return (
    <TableContainer className={classes.root}>
      <Table stickyHeader aria-label='sticky table' className={classes.table}>
        <TableHead className={classes.tableHeader}>
          <TableRow key='title'>
            {colomnsNames.map((colName, index) => (
              <TableCell
                key={colName}
                align='center'
                className={`${classes.titleCell} ${tableHeaderClasses(index)}`}
              >
                {colName}
              </TableCell>
            ))}
            <TableCell className={`${classes.titleCell} ${classes.roundBorderLeft}`} align='center' />
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableContent}>
          {rowsData.map((row, rowIndex) => (
            <TableRow key={row.id} className={classes.row}>
              {row.data.map((cell, cellIndex) => (
                <TableCell
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${rowIndex}-${cellIndex}`}
                  className={classes.cell}
                  align='center'
                >
                  {cell}
                </TableCell>
              )) }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
