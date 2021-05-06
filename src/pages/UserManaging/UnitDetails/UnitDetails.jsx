/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './UnitDetails.styles';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import HeadLine from './HeadLine/HeadLine';
import UsersTable from './UsersTable/UsersTable';
import UserService from '../../../services/user.service.js';

const UnitDetails = ({ unit }) => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(async () => {
    setUsers(await UserService.getUsersByUnitId(unit.id));
  }, []);

  useEffect(async () => {
    setUsers(await UserService.getUsersByUnitId(unit.id));
  }, [unit]);

  return (
    <DashboardCard className={classes.unitDetails}>
      { unit
        ? (
          <>
            <div className={classes.root}>
              <HeadLine unitName={unit.name} numberOfUnitUsers={38} />
            </div>
            <UsersTable users={users} />
          </>
        ) : <div><h1 className={classes.noUnitSelected}>{ t('text.noSelectedUnit') }</h1></div> }

    </DashboardCard>

  );
};

export default UnitDetails;
