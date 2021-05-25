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
    <div>
      <DashboardCard className={classes.unitDetails}>
        { unit ? (
          <>
            <div className={classes.root}>
              <UnitDetailsHeadLine unitName={unit.name} numberOfUnitUsers={users.length} />
            </div>
            <UnitDetailsUsersTable users={users} setUsers={setUsers} unit={unit} />
          </>
        ) : <div className={classes.noUnitSelectedDiv}><h1 className={classes.noUnitSelected}>{ t('text.noSelectedUnit') }</h1></div> }
      </DashboardCard>
    </div>

  );
};

export default UnitDetails;
