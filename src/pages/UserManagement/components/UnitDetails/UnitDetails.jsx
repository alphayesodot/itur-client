import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import useStyles from './UnitDetails.styles';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard.jsx';
import UnitDetailsHeadLine from '../UnitDetailsHeadLine/UnitDetailsHeadLine';
import UnitDetailsUsersTable from '../UnitDetailsUsersTable/UnitDetailsUsersTable';
import UserService, { Role } from '../../../../services/user.service.js';

const UnitDetails = ({ unit, users, setUsers, isUserAdmin}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const adminRoles = [Role.Mada, Role.Technical, Role.Itur];

  // const adminRoles = [
  //   { roleName: Role.Mada, roleUsers: madaUsers, setRoleUsers: setMadaUsers },
  //   { roleName: Role.Technical, roleUsers: techUsers, setRoleUsers: setTechUsers },
  //   { roleName: Role.Itur, roleUsers: iturUsers, setRoleUsers: setIturUsers },
  // ];

  // const getAllAdminUsers = () => {
  //   adminRoles.forEach((role) => {
  //     UserService.getUsers({ role: role.roleName }).then((res) => {
  //       role.setRoleUsers(res);
  //     }).catch(() => {
  //       toast(t('error.server'));
  //     });
  //   });
  // };

  useEffect(() => {
    setUsers([]);
    if (isUserAdmin) {
      UserService.getUsersByRoles(adminRoles).then((res) => {
        setUsers(res);
      }).catch(() => {
        toast(t('error.server'));
      });
    } else {
      UserService.getUsers({ unitId: unit.id }).then((res) => {
        setUsers(res);
      }).catch(() => {
        toast(t('error.server'));
      });
    }
  }, [unit]);

  return (
    <div>
      <DashboardCard className={classes.root}>
        { unit ? (
          <>
            <UnitDetailsHeadLine unitName={unit.name} numberOfUnitUsers={users.length} />
            <UnitDetailsUsersTable
              users={users}
              setUsers={setUsers}
              unit={unit}
              isUserAdmin={isUserAdmin}
            />
          </>
        ) : <div className={classes.noUnitSelectedDiv}><h1 className={classes.noUnitSelected}>{ t('title.noSelectedUnit') }</h1></div> }
      </DashboardCard>
    </div>

  );
};

export default UnitDetails;
