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
  Dialog,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import useStyles from './TableRow.styles.js';
import UserService from '../../../../../services/user.service.js';
import UsersDialog from '../../UsersDialog/UsersDialog.jsx';

const RowTable = ({ role, users, unit }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const createUsers = async () => {
    await UserService.addUsers(unit.id, role);
  };

  return (
    <TableRow key={role} className={classes.tableRow}>
      <TableCell align='center'>{role}</TableCell>
      <TableCell align='center'>{users.length}</TableCell>
      <TableCell align='center'>
        <Button
          className={classes.permissionsButton}
          onClick={() => setOpenDialog(true)}
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
                  InputProps={{ type: 'number' }}
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
      <Dialog
        classes={{
          paper: classes.paper,
        }}
        onClose={() => setOpenDialog(false)}
        aria-labelledby='simple-dialog-title'
        open={openDialog}
      >
        <UsersDialog
          users={users}
          role={role}
          setOpenUsersDialog={setOpenDialog}
        />
      </Dialog>
    </TableRow>
  );
};

export default RowTable;
