import { useTranslation } from 'react-i18next';
import {
  TableCell,
  TableRow,
  TextField,
  IconButton,
  Button,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './UnitDetailsTableRow.styles.js';
import UserService from '../../../services/user.service';
import RoleUsersDialog from '../RoleUsersDialog/RoleUsersDialog';
import NewUsersDialog from '../NewUsersDialog/NewUsersDialog';

const RowTable = ({ roleToDisplay, role, users, setRoleUsers, setUsers, unit }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [numberOfUsersToAdd, setNumberOfUsersToAdd] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openNewUsersDialog, setOpenNewUsersDialog] = useState(false);
  const [usersToAdd, setUsersToAdd] = useState([]);

  useEffect(async () => {
    setUsersToAdd([]);
    setOpenAdd(false);
  }, [unit]);

  const createUsers = async () => {
    const unitShortId = unit.id.substring(unit.id.length - 3);

    for (let userIndex = 1; userIndex <= numberOfUsersToAdd; userIndex += 1) {
      const userName = `${role}${unitShortId}${users.length + userIndex}`;
      UserService.createUser(unit.id, role, userName).then((newUser) => {
        setRoleUsers((prevUsersList) => [...prevUsersList, newUser]);
        setUsers((prevUsersList) => [...prevUsersList, newUser]);
        setUsersToAdd((prevUsersRoleList) => [...prevUsersRoleList, newUser]);
        if (userIndex === numberOfUsersToAdd) {
          setOpenNewUsersDialog(true);
        }
      }).catch(() => {
        toast(t('userManagement.text.userNotAddWarning'));
      });
    }
  };

  return (
    <TableRow key={roleToDisplay} className={classes.root}>
      <TableCell align='center'>{roleToDisplay}</TableCell>
      <TableCell align='center'>{users.length}</TableCell>
      <TableCell align='center'>
        <Button
          className={classes.permissionsButton}
          onClick={() => setOpenDialog(true)}
          disabled={users.length === 0}
        >
          {t('userManagement.buttons.view')}
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
                  onChange={(event) => setNumberOfUsersToAdd(Number(event.target.value))}
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
      <RoleUsersDialog
        users={users}
        role={roleToDisplay}
        unit={unit}
        openDialog={openDialog}
        setOpenUsersDialog={setOpenDialog}
      />
      <NewUsersDialog
        users={usersToAdd}
        role={roleToDisplay}
        unit={unit}
        openNewUsersDialog={openNewUsersDialog}
        setOpenNewUsersDialog={setOpenNewUsersDialog}
        setUsersToAdd={setUsersToAdd}
        setNumberOfUsersToAdd={setNumberOfUsersToAdd}
      />
    </TableRow>
  );
};

export default RowTable;
