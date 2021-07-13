import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import useStyles from './UnitDetails.styles';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard.jsx';
import UnitDetailsHeadLine from '../UnitDetailsHeadLine/UnitDetailsHeadLine';
import UnitDetailsUsersTable from '../UnitDetailsUsersTable/UnitDetailsUsersTable';
import UserService from '../../../../services/user.service.js';
import NoObjectsToShow from '../../../../common/NoObjectsToShow/NoObjectsToShow';

const UnitDetails = ({ unit, users, setUsers }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    UserService.getUsers({ unitId: unit.id }).then((res) => {
      setUsers(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, [unit]);

  return (
    <div>
      <DashboardCard className={classes.root}>
        { unit ? (
          <>
            <UnitDetailsHeadLine unitName={unit.name} numberOfUnitUsers={users.length} />
            <UnitDetailsUsersTable users={users} setUsers={setUsers} unit={unit} />
          </>
        ) : <NoObjectsToShow title={t('title.noSelectedUnit')} /> }
      </DashboardCard>
    </div>

  );
};

export default UnitDetails;
