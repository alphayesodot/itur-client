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
import UserStoreInstance from '../../stores/User.store';

const NodeGroupPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const userRole = UserStoreInstance.userProfile.role;
  const [allNodeGroupRows, setAllNodeGroupRows] = useState([]);
  const [nodeGroupRowsToShow, setNodeGroupRowsToShow] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const colNames = [t('tableColumns.nodeGroupName'), t('tableColumns.unit'), t('tableColumns.users'), t('tableColumns.ramadOfUnit')];
  const UpdateAllNodeGroupList = async () => {
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
  };
  useEffect(async () => {
    await UpdateAllNodeGroupList();
  }, []);

  const handeOnCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className={classes.root}>
      <Header
        allNodeGroupRows={allNodeGroupRows}
        setNodeGroupRowsToShow={setNodeGroupRowsToShow}
        setOpenDialog={setOpenDialog}
        allowNewNodeGroup={userRole === 'RAMAD_ITUR_OF_UNIT'}
      />
      <DashboardCard className={classes.dashbord}>
        <Typography className={classes.content}>
          <strong className={classes.title}>{t('title.nodeGroups')}</strong>
          {' '}
          <span className={classes.countTitle}>{`(${nodeGroupRowsToShow.length})`}</span>
        </Typography>
        <DataTable rowsData={nodeGroupRowsToShow} colomnsNames={colNames} />
        <CreationDialog
          open={openDialog}
          onClose={handeOnCloseDialog}
          UpdateAllNodeGroupLis={UpdateAllNodeGroupList}
        />
      </DashboardCard>
    </div>
  );
};

export default NodeGroupPage;
