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
import CustomBackDrop from '../../common/CustomBackDrop/CustomBackDrop';
import NoObjectsToShow from '../../common/NoObjectsToShow/NoObjectsToShow';
import DeletionDialog from '../../common/DeletionDialog/DeletionDialog';

const NodeGroupPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const userRole = UserStoreInstance.userProfile.role;
  const [userUnitName, setUserUnitName] = useState('');
  const [allNodeGroupRows, setAllNodeGroupRows] = useState([]);
  const [nodeGroupRowsToShow, setNodeGroupRowsToShow] = useState([]);
  const [nodeGroupToDelete, setNodeGroupToDelete] = useState(0);
  const [nodeGroupToAdd, setNodeGroupToAdd] = useState({});
  const [nodeGroupToEdit, setNodeGroupToEdit] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const colNames = [t('tableColumns.nodeGroupName'), t('tableColumns.unit'), t('tableColumns.users'), t('tableColumns.ramadOfUnit'), ''];
  const [isLoading, setIsLoading] = useState(false);
  const [openDeletionDialog, setOpenDeletionDialog] = useState(false);
  const [duringDeletion, setDuringDeletion] = useState(false);

  const handeOnCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(async () => {
    setIsLoading(true);
    try {
      const unitOfRamad = userRole === Role.RamadIturOfUnit && await UnitService.getMyUnit();
      setUserUnitName(unitOfRamad.name);
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
              setNodeGroupToDelete={setNodeGroupToDelete}
              setNodeGroupToAdd={setNodeGroupToAdd}
              setNodeGroupToEdit={setNodeGroupToEdit}
              duringDeletion={duringDeletion}
              setDuringDeletion={setDuringDeletion}
            />],
        };
      });
      const getAllNodeGroupRows = await Promise.all(promises);
      setAllNodeGroupRows(getAllNodeGroupRows);
      setNodeGroupRowsToShow(getAllNodeGroupRows);
    } catch {
      toast(t('error.server'));
    }
    setIsLoading(false);
  }, []);

  // add nodeGroup to state - only ramad may do that
  useEffect(() => {
    if (Object.keys(nodeGroupToAdd).length) {
      const nodeGroupRow = {
        id: nodeGroupToAdd.id,
        data: [nodeGroupToAdd.name,
          userUnitName,
          nodeGroupToAdd.usersIds ? nodeGroupToAdd.usersIds.length : 0,
          UserStoreInstance.userProfile.name,
          <NodeGroupOptionsButton
            nodeGroup={nodeGroupToAdd}
            setNodeGroupToDelete={setNodeGroupToDelete}
            setNodeGroupToAdd={setNodeGroupToAdd}
            setNodeGroupToEdit={setNodeGroupToEdit}
            duringDeletion={duringDeletion}
            setDuringDeletion={setDuringDeletion}
          />],
      };
      setAllNodeGroupRows([...allNodeGroupRows, nodeGroupRow]);
      setNodeGroupRowsToShow([...allNodeGroupRows, nodeGroupRow]);
    }
  }, [nodeGroupToAdd]);

  // update nodeGroup in state - only ramad may do that
  useEffect(() => {
    if (Object.keys(nodeGroupToEdit).length) {
      const rowAllIdx = allNodeGroupRows.findIndex((row) => row.id === nodeGroupToEdit.id);
      const rowShowIdx = nodeGroupRowsToShow.findIndex((row) => row.id === nodeGroupToEdit.id);
      const tmpRow = { ...allNodeGroupRows[rowAllIdx] };
      tmpRow.data = [
        nodeGroupToEdit.name,
        tmpRow.data[1],
        nodeGroupToEdit.usersIds ? nodeGroupToEdit.usersIds.length : 0,
        tmpRow.data[3],
        <NodeGroupOptionsButton
          nodeGroup={nodeGroupToEdit}
          setNodeGroupToDelete={setNodeGroupToDelete}
          setNodeGroupToAdd={setNodeGroupToAdd}
          setNodeGroupToEdit={setNodeGroupToEdit}
          duringDeletion={duringDeletion}
          setDuringDeletion={setDuringDeletion}
        />,
      ];
      if (rowAllIdx > -1) {
        const tmpAllRows = [...allNodeGroupRows];
        tmpAllRows[rowAllIdx] = tmpRow;
        setAllNodeGroupRows(tmpAllRows);
      }
      if (rowShowIdx > -1) {
        const tmpShowRows = [...nodeGroupRowsToShow];
        tmpShowRows[rowShowIdx] = tmpRow;
        setNodeGroupRowsToShow(tmpShowRows);
      }
    }
  }, [nodeGroupToEdit]);

  // delete from state
  useEffect(async () => {
    if (Object.keys(nodeGroupToDelete).length) setOpenDeletionDialog(true);
  }, [nodeGroupToDelete]);

  const deleteNodeGroup = () => {
    try {
      NodeGroupService.deleteNodeGroup(nodeGroupToDelete.id).then(async () => {
        setNodeGroupToDelete(nodeGroupToDelete);
        setDuringDeletion(false);
      });
      const allIdx = [...allNodeGroupRows].findIndex((q) => q.id === nodeGroupToDelete.id);
      const showIdx = [...nodeGroupRowsToShow].findIndex((q) => q.id === nodeGroupToDelete.id);
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
    } catch {
      toast('error.server');
    }
  };

  const infoContent = nodeGroupRowsToShow.length
    ? (
      <div className={classes.tableContainer}>
        <DataTable rowsData={nodeGroupRowsToShow} columnNames={colNames} />
      </div>
    )
    : (
      <NoObjectsToShow title={t('message.noNodeGroups')} />
    );

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
        {isLoading ? <CustomBackDrop /> : infoContent}
        <NodeGroupDialog
          open={openDialog}
          onClose={handeOnCloseDialog}
          setNodeGroupToAdd={setNodeGroupToAdd}
          setNodeGroupToEdit={setNodeGroupToEdit}
        />
      </DashboardCard>
      <DeletionDialog
        open={openDeletionDialog}
        onClose={() => { setOpenDeletionDialog(false); }}
        onDeletion={deleteNodeGroup}
        deletedObjectName={nodeGroupToDelete.name}
      />
    </div>
  );
};

export default NodeGroupPage;
