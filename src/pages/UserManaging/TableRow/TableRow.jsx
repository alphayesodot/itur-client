/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
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
import useStyles from './TableRow.styles.js';
import UserService from '../../../services/user.service';
import UsersDialog from '../UsersDialog/UsersDialog';
import NewUsersDialog from '../NewUsersDialog/NewUsersDialog';

const RowTable = ({ role, users, setUsers, unit }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [numberOfUsersToAdd, setNumberOfUsersToAdd] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openNewUsersDialog, setOpenNewUsersDialog] = useState(false);
  const [usersToAdd, setUsersToAdd] = useState([]);

  const notify = () => toast(t('text.userNotAddWarning'));

  const getRoleName = () => {
    let roleName = '';

    switch (role) {
      case 'מראיינ.ת': // TODO: change to i18n
        roleName = 'interviewer';
        break;
      case t('role.ramadIturOfUnit'):
        roleName = 'ramadItur';
        break;
      case t('role.ramadIturAssistant'):
        roleName = 'ramadIturAssistant';
        break;
      case t('role.professionalRamad'):
        roleName = 'professionalRamad';
        break;
      case t('role.psychologist'):
        roleName = 'psychologist';
        break;
      case t('role.diagnoser'):
        roleName = 'diagnoser';
        break;
      default:
    }
    return roleName;
  };

  useEffect(async () => {
    setUsersToAdd([]);
    setOpenAdd(false);
  }, [unit]);

  const createUsers = async () => {
    let usersLength = users.length;
    const unitShortId = unit.id.substring(unit.id.length - 3);

    for (let i = 0; i < numberOfUsersToAdd; i += 1) {
      const userName = `${getRoleName()}${unitShortId}${usersLength}`;
      UserService.createUser(unit.id, role, userName).then((newUser) => {
        setUsers((prevUsersList) => [...prevUsersList, newUser]);
        setUsersToAdd((prevUsersRoleList) => [...prevUsersRoleList, newUser]);
        usersLength += 1;
        if (i + 1 == numberOfUsersToAdd) {
          setOpenNewUsersDialog(true);
        }
      }).catch(() => {
        notify();
      });
    }
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

        <UsersDialog
          users={users}
          role={role}
          unit={unit}
          openDialog={openDialog}
          setOpenUsersDialog={setOpenDialog}
        />

        <NewUsersDialog
          users={usersToAdd}
          role={role}
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
