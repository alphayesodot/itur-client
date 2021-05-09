/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '@material-ui/core';
import useStyles from './UnitDetails.styles';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import HeadLine from './HeadLine/HeadLine';
import UsersTable from './UsersTable/UsersTable.jsx';
import UserService from '../../../services/user.service.js';
import UsersDialog from './UsersDialog/UsersDialog.jsx';

const UnitDetails = ({ unit, openUsersDialog, setOpenUsersDialog }) => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(async () => {
    setUsers(await UserService.getUsersByUnitId(unit.id));
  }, [unit]);

  return (
    <div>
      <DashboardCard className={classes.unitDetails}>
        { unit
          ? (
            <>
              <div className={classes.root}>
                <HeadLine unitName={unit.name} numberOfUnitUsers={users.length} />
              </div>
              <UsersTable users={users} openUsersDialog={openUsersDialog} setOpenUsersDialog={setOpenUsersDialog} unit={unit} />
            </>
          ) : <div className={classes.noUnitSelectedDiv}><h1 className={classes.noUnitSelected}>{ t('text.noSelectedUnit') }</h1></div> }

      </DashboardCard>
      <Dialog onClose={() => setOpenUsersDialog(false)} aria-labelledby='simple-dialog-title' open={openUsersDialog}>
        <UsersDialog className={classes.usersDialog} openUsersDialog={openUsersDialog} setOpenUsersDialog={setOpenUsersDialog} />
      </Dialog>
    </div>

  );
};

export default UnitDetails;
