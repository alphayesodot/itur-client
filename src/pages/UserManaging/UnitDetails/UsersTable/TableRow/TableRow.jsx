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
import { useState } from 'react';
import useStyles from './TableRow.styles.js';
import UserService from '../../../../../services/user.service.js';
import UsersDialog from '../../UsersDialog/UsersDialog.jsx';
import NewUsersDialog from '../../../newUsersDialog/NewUsersDialog.jsx';

const RowTable = ({ role, users, unit }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [numberOfUsersToAdd, setNumberOfUsersToAdd] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openNewUsersDialog, setOpenNewUsersDialog] = useState(false);
  // const [usersToAdd, setUsersToAdd] = useState([]);

  const createUsers = async () => {
    // const usersLength = numberOfUsersToAdd; //  TODO: send username name
    const requests = [];
    for (let i = 0; i < numberOfUsersToAdd; i += 1) {
      requests.push(UserService.createUser(unit.id, role));
    }
    Promise.all(requests).then(() => {
      setOpenNewUsersDialog(true);
    });
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
                  value={numberOfUsersToAdd}
                  onChange={(event) => setNumberOfUsersToAdd(event.target.value)}
                />
                <Button
                  variant='contained'
                  className={classes.addUsersButton}
                  disabled={numberOfUsersToAdd <= 0}
                  onClick={() => createUsers()}
                >
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
          unit={unit}
          setOpenUsersDialog={setOpenDialog}
        />
      </Dialog>

      <Dialog
        classes={{
          paper: classes.paper,
        }}
        onClose={() => setOpenNewUsersDialog(false)}
        aria-labelledby='simple-dialog-title'
        open={openNewUsersDialog}
      >
        <NewUsersDialog
          users={users} // TODO: change to new users
          role={role}
          unit={unit}
          setOpenNewUsersDialog={setOpenNewUsersDialog}
        />
      </Dialog>
    </TableRow>
  );
};

export default RowTable;
