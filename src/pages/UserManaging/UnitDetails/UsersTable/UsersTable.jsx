/* eslint-disable no-unused-vars */
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  TableBody,
  Button,
  TextField,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './UsersTable.styles';

const UsersTable = ({ users }) => {
  const { t } = useTranslation();
  const createData = (role, amount, permissions, add) => ({
    role,
    amount,
    permissions,
    add,
  });
  const [rows, setRows] = useState([
    createData('מראיינ.ת', 16, 'צפייה ', true),
    createData('רמד איתור', 2, 'עריכה ', true),
    createData('טכני', 1, 'צפייה / עריכה ', true),
    createData('רמד מקצועי', 0, 'עריכה ', true),
    createData('פסיכולוגי.ת', 2, 'צפייה', true),
  ]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='simple table' dir='rtl'>
          <TableHead>
            <TableCell align='center' className={classes.tableHeadLine}>{t('text.role')}</TableCell>
            <TableCell align='center' className={classes.tableHeadLine}>{t('text.amount')}</TableCell>
            <TableCell align='center' className={classes.tableHeadLine}>{t('text.permissions')}</TableCell>
            <TableCell align='right' className={classes.tableHeadLine}>{t('text.add')}</TableCell>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.role}>
                <TableCell align='center'>{row.role}</TableCell>
                <TableCell align='center'>{row.amount}</TableCell>
                <TableCell align='center'>
                  <Button className={classes.permissionsButton}>
                    {row.permissions}
                  </Button>
                </TableCell>
                <TableCell align='right'>
                  <div className={classes.addDiv}>
                    <IconButton className={classes.iconBotton}>
                      <AddIcon />
                    </IconButton>
                    <div>
                      <TextField inputProps={{ type: 'number' }} className={classes.numberOfRoleUsers} />
                      <Button variant='contained' className={classes.addUnitButton}>
                        {t('button.addUnit')}
                      </Button>
                    </div>
                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersTable;
