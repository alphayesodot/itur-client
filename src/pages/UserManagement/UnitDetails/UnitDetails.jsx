import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './UnitDetails.styles';
import DashboardCard from '../../../common/DashboardCard/DashboardCard.jsx';
import UnitDetailsHeadLine from '../UnitDetailsHeadLine/UnitDetailsHeadLine.jsx';
import UnitDetailsUsersTable from '../UnitDetailsUsersTable/UnitDetailsUsersTable';
import UserService from '../../../services/user.service.js';

const UnitDetails = ({ unit, users, setUsers }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(async () => {
    setUsers(await UserService.getUsersByUnitId(unit.id));
  }, [unit]);

  return (
    <DashboardCard className={classes.root}>
      { unit ? (
        <>
          <UnitDetailsHeadLine unitName={unit.name} numberOfUnitUsers={users.length} />
          <UnitDetailsUsersTable users={users} setUsers={setUsers} unit={unit} />
        </>
      ) : <div className={classes.noUnitSelectedDiv}><h1 className={classes.noUnitSelected}>{ t('userManagement.noSelectedUnit') }</h1></div> }
    </DashboardCard>
  );
};

export default UnitDetails;
