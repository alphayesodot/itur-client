import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
import DataTable from './DataTable/DataTable';
import NodeGroupService from '../../services/nodeGroup.service'
import UnitService from '../../services/unit.service'
import UserService from '../../services/user.service'
const objectToArray = (nodeGroupName, unit, users, ramadOfUnit) => {
  return [nodeGroupName, unit, users, ramadOfUnit];
}

const NodeGroupPage = () => {
  const [nodeGroupRows, setnodeGroupRows] =  useState([]);
  useEffect(() => {
    NodeGroupService.getNodeGroups().then(async (res)=> {
      const pickedNodeGroupFields = res.map(async (nodeGroup)=>{
        // const unitName= (await UnitService.getUnitById(nodeGroup.unitId)).name;
        // const ramad = (await UserService.getUsersByUnitId(nodeGroup.unitId)).find((user) => user.role === Role.RamadIturOfUnit);
        return objectToArray(nodeGroup.name,'unitName',nodeGroup.usersIds.length, '')
      });
      setnodeGroupRows(pickedNodeGroupFields);
    })
  }, []);
  console.log(nodeGroupRows)
  const classes = useStyles();
  const { t } = useTranslation();
  const colNames = [t('tableColumns.nodeGroupName'), t('tableColumns.unit'), t('tableColumns.users'), t('tableColumns.ramadOfUnit')];
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
