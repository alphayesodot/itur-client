import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
import CreationDialog from './components/CreationDialog/CreationDialog';
import DataTable from './components/DataTable/DataTable';
import NodeGroupService from '../../services/nodeGroup.service';
import UnitService from '../../services/unit.service';
import { UserService, Role } from '../../services/user.service';

const NodeGroupPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [allNodeGroupRows, setAllNodeGroupRows] = useState([]);
  const [nodeGroupRowsToShow, setNodeGroupRowsToShow] = useState([]);
  const colNames = [t('tableColumns.nodeGroupName'), t('tableColumns.unit'), t('tableColumns.users'), t('tableColumns.ramadOfUnit')];

  useEffect(() => {
    (async () => {
      const nodeGroups = await NodeGroupService.getNodeGroups();
      const promises = nodeGroups.map(async (nodeGroup) => {
        const unit = await UnitService.getUnitById(nodeGroup.unitId);
        const ramad = (await UserService.getUsersByUnitId(nodeGroup.unitId))
          .find((user) => user.role === Role.RamadIturOfUnit);
        return [nodeGroup.name, unit.name, nodeGroup.usersIds.length, ramad?.name || ''];
      });
      const getAllNodeGroupRows = await Promise.all(promises);
      setAllNodeGroupRows(getAllNodeGroupRows);
      setNodeGroupRowsToShow(getAllNodeGroupRows);
    })();
  }, []);

  return (
    <div className={classes.root}>
      <Header
        allNodeGroupRows={allNodeGroupRows}
        setNodeGroupRowsToShow={setNodeGroupRowsToShow}
      />
      <DashboardCard className={classes.dashbord}>
        <Typography className={classes.content}>
          <strong className={classes.title}>{t('title.nodeGroups')}</strong>
          {' '}
          <span className={classes.countTitle}>{`(${nodeGroupRowsToShow.length})`}</span>
        </Typography>
        <DataTable rowsData={nodeGroupRowsToShow} colomnsNames={colNames} />
        {/* <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} /> */}
        <CreationDialog />
      </DashboardCard>
    </div>
  );
};

export default NodeGroupPage;
