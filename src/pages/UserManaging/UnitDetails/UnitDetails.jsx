/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import useStyles from './UnitDetails.styles';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import HeadLine from './HeadLine/HeadLine';
import UsersTable from './UsersTable/UsersTable';
import UserService from '../../../services/user.service.js';

const UnitDetails = ({ unit }) => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    setUsers(await UserService.getUsersByUnitId(unit.id));
  }, []);

  return (
    <DashboardCard className={classes.unitDetails}>
      <div className={classes.root}>
        <HeadLine unitName={unit.name} numberOfUnitUsers={38} />
      </div>
      <UsersTable users={users} />

    </DashboardCard>

  );
};

export default UnitDetails;
