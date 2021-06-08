import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
import DataTable from './DataTable/DataTable';
import NodeGroupService from '../../services/nodeGroup.service';
import UnitService from '../../services/unit.service';
import { UserService, Role } from '../../services/user.service';

const NodeGroupPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [nodeGroupRows, setNodeGroupRows] = useState([]);
  const colNames = [t('tableColumns.nodeGroupName'), t('tableColumns.unit'), t('tableColumns.users'), t('tableColumns.ramadOfUnit')];

  useEffect(() => {
    (async () => {
      const nodeGroups = await NodeGroupService.getNodeGroups();
      const promises = nodeGroups.map(async (nodeGroup) => {
        const unit = await UnitService.getUnitById(nodeGroup.unitId);
        // eslint-disable-next-line max-len
        const ramad = (await UserService.getUsersByUnitId(nodeGroup.unitId)).find((user) => user.role === Role.RamadIturOfUnit);
        return [nodeGroup.name, unit.name, nodeGroup.usersIds.length, ramad?.name || ''];
      });
      const pickedNodeGroupFields = await Promise.all(promises);
      setNodeGroupRows(pickedNodeGroupFields);
    })();

    // NodeGroupService.getNodeGroups().then((nodeGroups) => {
    //   const pickedNodeGroupFields = nodeGroups.map((nodeGroup) => {
    //     UnitService.getUnitById(nodeGroup.unitId).then((unitOfNodeGroup) => {
    //       const ramad = UserService.getUsersByUnitId(nodeGroup.unitId).then((unitUsers) => {
    //         return unitUsers.find((user) => user.role === 'Role.RamadIturOfUnit');
    // eslint-disable-next-line max-len
    //         return objectToArray(nodeGroup.name, unitOfNodeGroup.name, nodeGroup.usersIds.length, ramad.name);
    //       });
    //     });
    //   });
    //   setNodeGroupRows(pickedNodeGroupFields);
    // });
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <DashboardCard className={classes.dashbord}>
        <div className={classes.content}>
          <Typography>
            <strong>{t('title.nodeGroups')}</strong>
            :
          </Typography>
        </div>
        <DataTable rowsData={nodeGroupRows} colomnsNames={colNames} />
      </DashboardCard>
    </div>
  );
};

export default NodeGroupPage;
