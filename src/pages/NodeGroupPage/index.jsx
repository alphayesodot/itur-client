import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
import NodeGroupDialog from './components/NodeGroupDialog/NodeGroupDialog';
import DataTable from '../../common/DataTable/DataTable';
import NodeGroupService from '../../services/nodeGroup.service';
import UnitService from '../../services/unit.service';
import UserService, { Role } from '../../services/user.service';
import UserStoreInstance from '../../stores/User.store';
import NodeGroupOptionsButton from './components/NodeGroupOptionsButton/NodeGroupOptionsButton';

const NodeGroupPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const userRole = UserStoreInstance.userProfile.role;
  const [allNodeGroupRows, setAllNodeGroupRows] = useState([]);
  const [nodeGroupRowsToShow, setNodeGroupRowsToShow] = useState([]);
  const [idToDelete, setIdToDelete] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const colNames = [t('tableColumns.nodeGroupName'), t('tableColumns.unit'), t('tableColumns.users'), t('tableColumns.ramadOfUnit'), ''];

  const createAllNodeGroupList = async () => {
    try {
      const nodeGroups = await NodeGroupService.getNodeGroups();
      const promises = nodeGroups.map(async (nodeGroup) => {
        const unit = userRole === Role.RamadIturOfUnit
          ? await UnitService.getMyUnit()
          : await UnitService.getUnitById(nodeGroup.unitId);
        const users = userRole === Role.RamadIturOfUnit
          ? await UserService.getUsers()
          : await UserService.getUsers({ unitId: nodeGroup.unitId });
        const ramad = users.find((user) => user.role === Role.RamadIturOfUnit);
        return {
          id: nodeGroup.id,
          data: [nodeGroup.name,
            unit.name,
            nodeGroup.usersIds ? nodeGroup.usersIds.length : 0, ramad?.name || '',
            <NodeGroupOptionsButton
              nodeGroup={nodeGroup}
              createAllNodeGroupList={createAllNodeGroupList}
              setIdToDelete={setIdToDelete}
            />],
        };
      });
      const getAllNodeGroupRows = await Promise.all(promises);
      setAllNodeGroupRows(getAllNodeGroupRows);
      setNodeGroupRowsToShow(getAllNodeGroupRows);
    } catch {
      toast(t('error.server'));
    }
  };

  useEffect(async () => {
    await createAllNodeGroupList();
  }, []);

  // delete from state
  useEffect(async () => {
    const allIdx = [...allNodeGroupRows].findIndex(
      (q) => q.id === idToDelete,
    );
    const showIdx = [...nodeGroupRowsToShow].findIndex(
      (q) => q.id === idToDelete,
    );
    if (allIdx > -1) {
      const tmpCopy = [...allNodeGroupRows];
      tmpCopy.splice(allIdx, 1);
      setAllNodeGroupRows([...tmpCopy]);
    }
    if (showIdx > -1) {
      const tmpCopy = [...nodeGroupRowsToShow];
      tmpCopy.splice(showIdx, 1);
      setNodeGroupRowsToShow([...tmpCopy]);
    }
  }, [idToDelete]);
  const handeOnCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={classes.root}>
      <Header
        allNodeGroupRows={allNodeGroupRows}
        setNodeGroupRowsToShow={setNodeGroupRowsToShow}
        setOpenDialog={setOpenDialog}
        allowNewNodeGroup={userRole === Role.RamadIturOfUnit}
      />
      <DashboardCard className={classes.dashboard}>
        <Typography className={classes.content}>
          <strong className={classes.title}>{t('title.nodeGroups')}</strong>
          {' '}
          <span className={classes.countTitle}>{`(${nodeGroupRowsToShow.length})`}</span>
        </Typography>

        {nodeGroupRowsToShow.length
          ? (
            <div className={classes.tableContainer}>
              <DataTable rowsData={nodeGroupRowsToShow} columnNames={colNames} />
            </div>
          )
          : (
            <div className={` ${classes.viewContainer} ${classes.emptyTable}`}>
              {' '}
              {t('message.noNodeGroups')}
            </div>
          )}
        <NodeGroupDialog
          open={openDialog}
          onClose={handeOnCloseDialog}
          createAllNodeGroupList={createAllNodeGroupList}
        />
      </DashboardCard>
    </div>
  );
};

export default NodeGroupPage;
