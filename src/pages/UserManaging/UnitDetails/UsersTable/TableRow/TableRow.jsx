/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableCell,
  TableRow,
  TextField,
  IconButton,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import useStyles from './TableRow.styles.js';
import UserService from '../../../../../services/user.service.js';

const RowTable = ({ role, amount, setOpenUsersDialog, unit }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const createUsers = async () => {
    await UserService.addUsers(unit.id, role);
  };

  return (
    <TableRow key={role} className={classes.tableRow}>
      <TableCell align='center'>{role}</TableCell>
      <TableCell align='center'>{amount}</TableCell>
      <TableCell align='center'>
        <Button
          className={classes.permissionsButton}
          onClick={() => setOpenUsersDialog(true)}
        >
          {t('text.view')}
        </Button>
      </TableCell>
      <TableCell align='right'>
        <div className={classes.addDiv}>
          <IconButton
            className={openAdd ? classes.openButton : classes.closeButton}
            onClick={() => {
              setOpenAdd(!openAdd);
            }}
          >
            <AddIcon />
          </IconButton>
          <div className={classes.hiddenElements}>
            {openAdd && (
              <>
                <TextField
                  InputProps={{ type: 'number',
                    underline: {
                      '&&&:before': {
                        borderBottom: 'none',
                      },
                      '&&:after': {
                        borderBottom: 'none',
                      },
                    } }}
                  className={classes.numberOfRoleUsers}
                  value={numberOfUsers}
                  onChange={(event) => setNumberOfUsers(event.target.value)}
                />
                <Button variant='contained' className={classes.addUsersButton} disabled={numberOfUsers <= 0} onClick={() => createUsers()}>
                  {t('button.addUsers')}
                </Button>
              </>
            )}
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
