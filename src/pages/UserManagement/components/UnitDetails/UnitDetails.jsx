import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';
import useStyles from './UnitDetails.styles';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard.jsx';
import UnitDetailsHeadLine from '../UnitDetailsHeadLine/UnitDetailsHeadLine';
import UnitDetailsUsersTable from '../UnitDetailsUsersTable/UnitDetailsUsersTable';
import UserService from '../../../../services/user.service.js';
import config from '../../config';
import NoObjectsToShow from '../../../../common/NoObjectsToShow/NoObjectsToShow';

const UnitDetails = ({ unit, users, setUsers }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (unit.id === config.superUnitId) {
      UserService.getUsersByRoles(config.adminRoles).then((res) => {
        setUsers(res);
      }).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
    } else {
      UserService.getUsers({ unitId: unit.id }).then((res) => {
        setUsers(res);
      }).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [unit]);

  return (
    <div>
      <DashboardCard className={classes.root}>
        { isLoading ? (
          <div className={classes.isLoadingDiv}>
            <CircularProgress color='primary' />
          </div>
        ) : (
          <div>
            { unit ? (
              <>
                <UnitDetailsHeadLine unitName={unit.name} numberOfUnitUsers={users.length} />
                <UnitDetailsUsersTable
                  users={users}
                  setUsers={setUsers}
                  unit={unit}
                />
              </>
            ) : <NoObjectsToShow title={t('title.noSelectedUnit')} /> }
          </div>
        )}

      </DashboardCard>
    </div>

  );
};

export default UnitDetails;
