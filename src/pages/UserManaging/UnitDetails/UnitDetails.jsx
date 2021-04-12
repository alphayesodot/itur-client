/* eslint-disable no-unused-vars */
import { useState } from 'react';
import useStyles from './UnitDetails.styles';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import HeadLine from './HeadLine/HeadLine';
import UsersTable from './UsersTable/UsersTable';

const UnitDetails = ({ selectedUnit }) => {
  const [users, setUsers] = useState([
    { id: 1, role: 'interviewer' },
    { id: 2, role: 'unit ramad itur' },
    { id: 3, role: 'unit ramad itur' },
    { id: 4, role: 'unit ramad itur assistant' },
    { id: 5, role: 'professional ramad' },
    { id: 6, role: 'mada' },
    { id: 7, role: 'itur' },
    { id: 8, role: 'itur' },
    { id: 9, role: 'interviewer' },
  ]);
  const classes = useStyles();
  return (
    <DashboardCard height='45rem' width='70rem' className={classes.unitDetails}>
      <div className={classes.root}>
        <HeadLine unitName='ספיר' numberOfUnitUsers={38} />
      </div>
      <UsersTable users={users} />

    </DashboardCard>

  );
};

export default UnitDetails;
